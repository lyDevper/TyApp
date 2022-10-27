import React, { Component } from "react";
import "./Sidebar.css";
import ChatListItems from "./SidebarItems";
import { AiFillHome } from "react-icons/ai";

export default class ChatList extends Component {
  allChatUsers = [
    {
      image: "https://cdn-icons-png.flaticon.com/512/2828/2828920.png",
      id: 1,
      name: "ตี้ตีแบด",
      active: true,
    },
    {
      image: "https://cdn-icons-png.flaticon.com/512/5745/5745661.png",
      id: 2,
      name: "หาตี้บุฟเฟ่ต์",
      active: false,
    },
    {
      image:
        "https://i.pinimg.com/originals/2c/fc/93/2cfc93d7665f5d7728782700e50596e3.png",
      id: 3,
      name: "หาเพื่อนอ่านหนังสือครับ",
      active: false,
    },
    {
      image: "https://cdn-icons-png.flaticon.com/512/3094/3094837.png",
      id: 4,
      name: "มานอนกันเหอะ",
      active: false,
    },
    {
      image: "https://cdn-icons-png.flaticon.com/512/3094/3094837.png",
      id: 4,
      name: "มานอนกันเหอะ",
      active: false,
    },
    {
      image: "https://cdn-icons-png.flaticon.com/512/3094/3094837.png",
      id: 4,
      name: "มานอนกันเหอะ",
      active: false,
    },
    {
      image: "https://cdn-icons-png.flaticon.com/512/3094/3094837.png",
      id: 4,
      name: "มานอนกันเหอะ",
      active: false,
    },
    {
      image: "https://cdn-icons-png.flaticon.com/512/3094/3094837.png",
      id: 4,
      name: "movie time",
      active: false,
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
        <div className="chatlist__heading">
          <button className="btnHome" onClick={() => backToHome()}>
            <AiFillHome size={40} />
          </button>
        </div>
        <div className="chatList__search">
          <div className="searchBox">
            <input type="text" className="searchInput" />
            <button className="transparentBtn1">
              <span class="material-symbols-rounded">search</span>
            </button>
          </div>
          {/* <div className="search_wrap">
            <input type="text" placeholder="Search Here" required />
            <button className="search-btn">
              <i className="fa fa-search"></i>
            </button>
          </div> */}
        </div>
        <div className="chatlist__items">
          {this.state.allChats.map((item, index) => {
            return (
              <ChatListItems
                name={item.name}
                key={item.id}
                animationDelay={index + 1}
                active={item.active ? "active" : ""}
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
