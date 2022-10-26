import os
import uuid
from flask import Flask,request,session,jsonify
from flask_cors import CORS
from dotenv import load_dotenv
from pymongo import MongoClient

load_dotenv()

PORT = int(os.getenv('PORT'))
DEBUG = os.getenv('DEBUG').strip().lower() == "true"
HOST = os.getenv('HOST').strip()

client = MongoClient(HOST)

db = client.get_database('app_meeting')
app = Flask(__name__)
cors = CORS(app)

#login
@app.route("/login",methods=["POST"])
def login():
    try:
        users=db.user
        user={'email':request.json['email'],'password':request.json['password']}
        requiredField = [
                     ("email"),
                     ("password")
                     ]

        for fieldValue in requiredField:
            if fieldValue not in request.json:
                return {'message':"Missing field"}, 400

        if users.find_one(user):
            user=users.find_one(user)
            user.pop('_id')
            return jsonify(user),200
        else:
            return {'message':'Wrong Email/Password'},400


    except:
        return {'message':'error'},400

#register

@app.route("/register",methods=["POST"])
def register():
    try:
        users=db.user
        user={
            'user_id':uuid.uuid4().hex,
            'email':request.json['email'],
            'username':request.json['username'],
            'password':request.json['password']
        }
        
        requiredField = [
                     ("email"),
                     ("username"),
                     ("password")
                     ]
        
        for fieldValue in requiredField:
            if fieldValue not in request.json:
                return {'message':"Missing field"}, 400

        if users.find_one({'email':user['email']}):
            return {'message':'อีเมลถูกใช้แล้ว'},400

        users.insert_one(user)

        return jsonify(user),200
        
    except:
        return {'message':'error'},400

#event
@app.route("/event")
def event():
    members=db.member_event
    all_event=[]
    events = db.event.aggregate([
        {
                '$lookup' : 
                {
                    'from': 'user',
                    'localField': 'user_id',
                    'foreignField': 'user_id',
                    'as': 'user' }
            },{
                '$unwind': '$user'
            },
            {
                '$unset':'user_id'
            }
            ])

    for e in events:
        e['member']=members.count_documents({'event_id':e['event_id'],'left_datetime':None})
        e.pop('_id')
        e['user'].pop('_id')
        all_event.append(e)
    return jsonify({'events':all_event}),200

@app.route("/join_event",methods=["POST"])
def join_event():
    members=db.member_event
    try :
        amount=int(request.json['amount'])
        user_id=request.json['user_id']
        event_id=request.json['event_id']
        if(members.count_documents({'event_id':event_id,'left_datetime':None})>=int(amount)):
            return{'message':'จำนวนคนครบแล้ว'},400

        if(members.find_one({'event_id':event_id,'user_id':user_id,'left_datetime':None})):
            return{'message':'เข้าร่วมอยู่แล้ว'},400

        add_member={'event_id':event_id,'user_id':user_id,'joined_datetime':None,'left_datetime':None}
        members.insert_one(add_member)
        return {'message':'เข้าร่วมสำเร็จ'},200
    except :
        return {'message':'เข้าร่วมไม่สำเร็จ'},400



@app.route("/create_event",methods=["POST"])
def create_event():
    events=db.event
    members_event=db.member_event
    try:
        event_id = uuid.uuid4().hex
        user_id = request.json['user_id']
        event_name = request.json['event_name']
        category = request.json['category']
        date = request.json['date']
        start_time = request.json['start_time']
        end_time = request.json['end_time']
        location = request.json['location']
        amount = request.json['amount']
        etc = request.json['etc']
        noti = request.json['noti']

        event = {'event_id':event_id,'user_id':user_id,'event_name':event_name,'category':category,'date':date,'start_time':start_time,'end_time':end_time,'location':location,'amount':amount,'etc':etc,'noti':noti}
        events.insert_one(event)
        members_event.insert_one({'event_id':event_id,'user_id':user_id,'joined_datetime':None,'left_datetime':None})

        return {'message':'create_event success'},201
    except:
        return {'message':'create_event fail'},400

#chat
@app.route("/my_group",methods=["GET"])
def my_event():
    try:
        user=request.json['user_id']
        my_group=[]
        group = db.member_event.aggregate([
        {
                '$match':
                {
                    'user_id':user
                }
        },
            {'$lookup' : 
                {
                    'from': 'event',
                    'localField': 'event_id',
                    'foreignField': 'event_id',
                    'as': 'event' }
            },{
                '$unwind': '$event'},
                {'$unset':'event_id'}
            ])

        for e in group:
            e['event']['member']=db.member_event.count_documents({'event_id':e['event']['event_id'],'left_datetime':None})
            e['event'].pop('_id')
            my_group.append(e['event'])

        return {'my_group':my_group},200
    except:
        return 400



#info
@app.route("/profile",methods=["GET","PUT"])
def profile():
    if request.method=="GET":
        try:
            user_id = request.json('user_id')
            user=db.user.find_one({'user_id':user_id})
            user.pop('_id')
            return jsonify(user),200
        except:
            return 400
    
    if request.method=="PUT":
        try:
            user_id = request.json('user_id')
            user = db.user.find_one(user_id)
            username = request.json('username')
            email = request.json('email')
            password = request.json('password')

            if(username==''):
                username = user['username']
            
            if(email==''):
                email = user['email']

            if(password==''):
                password = user['password']
            db.user.update_one({'user_id':user_id},{'username':username,'email':email,'password':password})
            return {'message':'แก้ไขสำเร็จ'},200
        except:
            return 400


@app.route("/event/<string:event_id>",methods=["GET"])
def info_event(event_id):
    try:
        event = db.event.aggregate([
        {
                '$match':
                {
                    'event_id':event_id
                }
        },
        {
                '$lookup' : 
                {
                    'from': 'user',
                    'localField': 'user_id',
                    'foreignField': 'user_id',
                    'as': 'user' }
            },{
                '$unwind': '$user'
            },{'$unset':'user_id'},
            ])
        for e in event:
            e.pop('_id')
            e['user'].pop('_id')
            return jsonify(e),200
    except:
        return 400


    

if __name__ == '__main__':
    app.run(port=PORT,debug=DEBUG)
