import React, { Component } from "react";
import MessageForm from "../containers/MessageForm"
import Messages from "../containers/Messages"
import Conversations from "../containers/Conversations"

class ChatRoom extends Component {
  state = {
    messages: [],
    conversationId: 0
  }

  appendMessage = message => {
    var messages = [...this.state.messages]
    messages.push(message)
    this.setState({ messages: messages })
  }

  selectActiveConversation = conversationId => {
    this.setState({activeConversation: conversationId})
  }


  render() {
    return (
      <div className="chat-room" >
        <div className="conversations-container">
          <Conversations 
            selectActiveConversation = { this.selectActiveConversation } 
          />
        </div>
        <div className="messages-container">
          <div className="messages-content">
            <Messages 
              messages = {this.state.messages} 
              />
          </div>
          <div className="message-form">
            <MessageForm 
              appendMessage = { this.appendMessage } 
            />
          </div>
        </div>
      </div>
    )
  }
}

export default ChatRoom