import React, { Component, createRef } from "react";

import "./ChatContent.css";
import Avatar from "./Avatar";
import ChatItem from "./ChatItem";
import { AiOutlineSend } from "react-icons/ai";

export default class ChatContent extends Component {
  messagesEndRef = createRef(null);
  chatItms = [
    {
      key: 1,
      image: "https://cdn-icons-png.flaticon.com/512/616/616430.png",
      type: "",
      msg: "อยากรู้",
    },
    {
      key: 2,
      image: "https://cdn-icons-png.flaticon.com/512/616/616430.png",
      type: "",
      msg: "ทำไมโปร 4 จ่าย 3 ถึงนัด 5 คน",
    },
    {
      key: 3,
      image: "https://cdn-icons-png.flaticon.com/512/2219/2219694.png",
      type: "other",
      msg: "เพราะคนนึงเป็นเจ้าของร้าน",
    },
  ];

  constructor(props) {
    super(props);
    this.state = {
      chat: this.chatItms,
      msg: "",
    };
  }

  scrollToBottom = () => {
    this.messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };

  componentDidMount() {
    window.addEventListener("keydown", (e) => {
      if (e.keyCode === 13) {
        if (this.state.msg !== "") {
          this.chatItms.push({
            key: 1,
            type: "",
            msg: this.state.msg,
            image: "https://cdn-icons-png.flaticon.com/512/616/616430.png",
          });
          this.setState({ chat: [...this.chatItms] });
          this.scrollToBottom();
          this.setState({ msg: "" });
        }
      }
    });
    this.scrollToBottom();
  }
  onStateChange = (e) => {
    this.setState({ msg: e.target.value });
  };

  render() {
    return (
      <div className="main__chatcontent">
        <div className="content__header">
          <div className="blocks">
            <div className="current-chatting-user">
              <Avatar
                className="avatar-img"
                isOnline="active"
                image="https://cdn-icons-png.flaticon.com/512/5745/5745661.png"
              />
              <p>หิวบุฟเฟ่ต์ (5/5)</p>
            </div>
          </div>
        </div>
        <div className="content__body">
          <div className="chat__items">
            {this.state.chat.map((itm, index) => {
              return (
                <ChatItem
                  animationDelay={index + 2}
                  key={itm.key}
                  user={itm.type ? itm.type : "me"}
                  msg={itm.msg}
                  image={itm.image}
                />
              );
            })}
            <div ref={this.messagesEndRef} />
          </div>
        </div>
        <div className="content__footer">
          <div className="sendNewMessage">
            <input
              type="text"
              placeholder="   Type a message here"
              onChange={this.onStateChange}
              value={this.state.msg}
            />
            <button className="btnSendMsg" id="sendMsgBtn">
              <AiOutlineSend size={35} />
            </button>
          </div>
        </div>
      </div>
    );
  }
}
