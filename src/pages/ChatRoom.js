import React, { Component } from "react";
import MessageForm from "../containers/MessageForm"
import Messages from "../containers/Messages"

class ChatRoom extends Component {
  state = {
    messages: []
  }

  appendMessage = message => {
    var messages = [...this.state.messages]
    messages.push(message)
    this.setState({ messages: messages })
  }


  render() {
    return (
      <div>
        I'm a chatroom
        <Messages messages={this.state.messages} />
        <MessageForm appendMessage={ this.appendMessage } />
      </div>
    )
  }
}

export default ChatRoom