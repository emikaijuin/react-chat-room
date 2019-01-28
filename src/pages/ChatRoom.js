import React, { Component } from "react";
import MessageForm from "../containers/MessageForm"

class ChatRoom extends Component {
  state = {}

  render() {
    return (
      <div>
        I'm a chatroom
        <MessageForm />
      </div>
    )
  }
}

export default ChatRoom