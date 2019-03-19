import React, { Component } from "react";
import MessageForm from "../containers/MessageForm";
import Messages from "../containers/Messages";
import Conversations from "../containers/Conversations";
import Socket from '../utils/socket'

class ChatRoom extends Component {
  constructor(props){
    super(props)
    this.state = {
      messages: [],
      activeConversationId: "all",
      username: '',
      members: [],
      shake: false
    }

    Socket.emit('NEW_USER')

    Socket.on('RECEIVE_BROADCAST', data => {
      this.appendMessage(data)
      this.setState({
        shake: true
      })
    })

    Socket.on('GET_CURRENT_USER', user => {
      this.setState({username: user.username})
    })

    Socket.on('UPDATE_USER_LIST', users => {
      let usernames = users.map(user => (
        user.username
      ))
      this.setState({
        members: usernames
      })
    })
  }

  getConversationMessages(conversationId) { // temporary until plugged into server back-end
    return {
      1: [
        {username: 'emikaijuin', message: 'What did the ocean say to another ocean?', timestamp: 1544532325758},
        {username: 'Liren', message: 'sea you later?', timestamp: 1544532341078},
        {username: 'emikaijuin', message: 'Nothing. It just waved', timestamp: 1544532347412},
        {username: 'Josh', message: "I'm leaving this chatroom", timestamp: 1544532402998},
      ],
      2: [
        {username: "Matt Cross", message: "this is a message", timestamp: 154829384718},
        {username: "emikaijuin", message: "this is a message", timestamp: 154829384718},
        {username: "Matt Cross", message: "this is a message", timestamp: 154829384718},
        {username: "emikaijuin", message: "this is a message", timestamp: 154829384718}
      ],
      3: [
        {username: "Steven Suzuki", message: "this is a message", timestamp: 154829384718},
        {username: "emikaijuin", message: "this is a message!!!!", timestamp: 154829384718},
        {username: "Steven Suzuki", message: "this is a message", timestamp: 154829384718},
        {username: "emikaijuin", message: "this is a messaadsflkajsdf;lkajsdfge", timestamp: 154829384718}
      ],
      4: [
        {username: "Liren Yeo", message: "this is a mesheyyyyysage", timestamp: 154829384718},
        {username: "emikaijuin", message: "this is a message", timestamp: 154829384718},
        {username: "Liren Yeo", message: "this is a meOMGHEYssage", timestamp: 154829384718},
        {username: "emikaijuin", message: "this is a message", timestamp: 154829384718}
      ],
      all: []
    }[conversationId]
  }

  getUserConversations(){ // temporary until plugged into back-end server
    return [
      {
        id: 1,
        members: ["Josh Teng", "Liren Yeo", "Edwin Capel", "Nicholas Ong"],
        name: "Mentors"
      },
      {
        id: 2,
        members: ["Matt Cross"],
        name: ""
      },
      {
        id: 3,
        members: ["Steven Suzuki"],
        name: ""
      },
      {
        id: 4,
        members: ["Liren Yeo"],
        name: ""
      },
      {
        id: "all",
        members: [...this.state.members],
        name: "2019 React Chat"
      }
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

  removeShake = () => {
    this.setState({shake: false})
  }

  render() {
    return (
      <div className="chat-room" >
        <div className="conversations-container">
          <Conversations 
            selectActiveConversation = { this.selectActiveConversation }
            conversations = { this.getUserConversations() } 
            activeConversationId = { this.state.activeConversationId }
            shake = {this.state.shake}
            removeShake = {this.removeShake}
          />
        </div>
        <div className="messages-container">
          <div className="messages-content">
            <Messages 
              messages = {this.state.messages}
              conversationId = {this.state.activeConversationId} 
              username = { this.state.username }
            />
          </div>
          <div className="message-form">
            <MessageForm 
              appendMessage = { this.appendMessage } 
              username = { this.state.username }
            />
          </div>
        </div>
      </div>
    )
  }
}

export default ChatRoom