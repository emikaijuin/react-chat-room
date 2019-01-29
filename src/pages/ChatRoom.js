import React, { Component } from "react";
import MessageForm from "../containers/MessageForm"
import Messages from "../containers/Messages"
import Conversations from "../containers/Conversations"

class ChatRoom extends Component {
  state = {
    messages: [],
    activeConversationId: null
  }

  getConversationMessages(conversationId) { // temporary until plugged into server back-end
    return {
      1: [
        {username: 'emikaijuin', content: 'What did the ocean say to another ocean?', timestamp: 1544532325758},
        {username: 'Liren', content: 'sea you later?', timestamp: 1544532341078},
        {username: 'emikaijuin', content: 'Nothing. It just waved', timestamp: 1544532347412},
        {username: 'Josh', content: "I'm leaving this chatroom", timestamp: 1544532402998},
      ],
      2: [
        {username: "Matt Cross", content: "this is a message", timestamp: 154829384718},
        {username: "emikaijuin", content: "this is a message", timestamp: 154829384718},
        {username: "Matt Cross", content: "this is a message", timestamp: 154829384718},
        {username: "emikaijuin", content: "this is a message", timestamp: 154829384718}
      ],
      3: [
        {username: "Steven Suzuki", content: "this is a message", timestamp: 154829384718},
        {username: "emikaijuin", content: "this is a message!!!!", timestamp: 154829384718},
        {username: "Steven Suzuki", content: "this is a message", timestamp: 154829384718},
        {username: "emikaijuin", content: "this is a messaadsflkajsdf;lkajsdfge", timestamp: 154829384718}
      ],
      4: [
        {username: "Liren Yeo", content: "this is a mesheyyyyysage", timestamp: 154829384718},
        {username: "emikaijuin", content: "this is a message", timestamp: 154829384718},
        {username: "Liren Yeo", content: "this is a meOMGHEYssage", timestamp: 154829384718},
        {username: "emikaijuin", content: "this is a message", timestamp: 154829384718}
      ]
    }[conversationId]
  }

  getUserConversations(){ // temporary until plugged into back-end server
    return [
      {
        id: 1,
        participants: ["Josh Teng", "Liren Yeo", "Edwin Capel", "Nicholas Ong"],
        name: "Mentors"
      },
      {
        id: 2,
        participants: ["Matt Cross"],
        name: ""
      },
      {
        id: 3,
        participants: ["Steven Suzuki"],
        name: ""
      },
      {
        id: 4,
        participants: ["Liren Yeo"],
        name: ""
      },
    ]
  }

  appendMessage = message => {
    var messages = [...this.state.messages]
    messages.push(message)
    this.setState({ messages: messages })
  }

  selectActiveConversation = event => {
    this.setState({
      activeConversationId: event.target.id,
      messages: this.getConversationMessages(event.target.id)
    })
  }

  render() {
    return (
      <div className="chat-room" >
        <div className="conversations-container">
          <Conversations 
            selectActiveConversation = { this.selectActiveConversation }
            conversations = { this.getUserConversations() } 

          />
        </div>
        <div className="messages-container">
          <div className="messages-content">
            <Messages 
              messages = {this.state.messages}
              conversationId = {this.state.activeConversationId} 
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