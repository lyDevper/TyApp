import React, { Component } from "react";
import "./Sidebar.css";
import ChatListItems from "./SidebarItems";

export default class ChatList extends Component {
  allChatUsers = [
    {
      image: "https://cdn-icons-png.flaticon.com/512/2828/2828920.png",
      id: 1,
      name: "ตี้ตีแบด",
      active: true,
      isOnline: true,
    },
    {
      image: "https://cdn-icons-png.flaticon.com/512/5745/5745661.png",
      id: 2,
      name: "หาตี้บุฟเฟ่ต์",
      active: false,
      isOnline: false,
    },
    {
      image:
        "https://i.pinimg.com/originals/2c/fc/93/2cfc93d7665f5d7728782700e50596e3.png",
      id: 3,
      name: "หาเพื่อนอ่านหนังสือครับ",
      active: false,
      isOnline: false,
    },
    {
      image: "https://cdn-icons-png.flaticon.com/512/3094/3094837.png",
      id: 4,
      name: "มานอนกันเหอะ",
      active: false,
      isOnline: true,
    },
  ];
  constructor(props) {
    super(props);
    this.state = {
      allChats: this.allChatUsers,
    };
  }
  render() {
    return (
      <div className="main__chatlist">
        <button onClick={() => backToHome()}>home</button>
        <div className="chatlist__heading">
          <button className="btn-nobg">
            <i className="fa fa-ellipsis-h"></i>
          </button>
        </div>
        <div className="chatList__search">
          <div className="search_wrap">
            <input type="text" placeholder="Search Here" required />
            <button className="search-btn">
              <i className="fa fa-search"></i>
            </button>
          </div>
        </div>
        <div className="chatlist__items">
          {this.state.allChats.map((item, index) => {
            return (
              <ChatListItems
                name={item.name}
                key={item.id}
                animationDelay={index + 1}
                active={item.active ? "active" : ""}
                isOnline={item.isOnline ? "active" : ""}
                image={item.image}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

function backToHome() {
  window.location.href = "/Home";
}