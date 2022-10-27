import React, { Component } from "react";
import "./Sidebar.css";
import ChatListItems from "./SidebarItems";
import { AiFillHome } from "react-icons/ai";

export default class ChatList extends Component {
  allChatUsers = [
    {
      image: "https://cdn-icons-png.flaticon.com/512/5745/5745661.png",
      id: 1,
      name: "หิวบุฟเฟ่ต์ (5/5)",
      active: true,
    },
    {
      image: "https://cdn-icons-png.flaticon.com/512/2828/2828920.png",
      id: 2,
      name: "ตีแบตกัน (2/5)",
      active: false,
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Backpack_icon.svg/1200px-Backpack_icon.svg.png",
      id: 3,
      name: "ไปท่องเที่ยวกัน (6/8)",
      active: false,
    },
    {
      image:
        "https://i.pinimg.com/originals/c9/21/f6/c921f6fb856a99caad2f52da8c7e5220.jpg",
      id: 4,
      name: "ดูโดราเอม่อน (4/5)",
      active: false,
    },
    {
      image:
        "https://toppng.com/uploads/preview/anxiety-disorders-stress-clipart-transparent-11563334262bsaqrthoru.png",
      id: 5,
      name: "หาคนติวดิสครีส (1/10)",
      active: false,
    },
    {
      image: "https://cdn-icons-png.flaticon.com/512/2829/2829086.png",
      id: 6,
      name: "เล่นบอร์ดเกม (16/16)",
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
