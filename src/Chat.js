import React, { Component } from "react";
import "./Chat.css";
import Sidebar from "./chatComponents/Sidebar";
import ChatContent from "./chatComponents/ChatContent";

export default class ChatBody extends Component {
  render() {
    return (
      <div className="main__chatbody">
        <Sidebar />
        <ChatContent />
      </div>
    );
  }
}
