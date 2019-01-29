import React, {Component} from "react";
import Message from "../components/Message";

class Messages extends Component {
  state = {
    currentUser: "emikaijuin" // temporary until connected to server
  }

  componentDidUpdate() {
    this.scrollToBottom()
  }

  scrollToBottom = () => {
    this.messagesEnd.scrollIntoView({ behavior: "smooth" })
  }

  isCurrentUser = messageUsername => {
    return messageUsername === this.state.currentUser ? true : false 
  }

  allMessagesStyle = () => (
    {
      padding: "20px",
      borderRadius: "10px",
      maxWidth: "80%",
      boxSizing: "border-box"
    }
  )
  currentUserStyle = () => (
     { 
      ...this.allMessagesStyle(),
      backgroundColor: "rgba(190,229,191,0.3)",
      float: "right",
      clear: "both"
    }
  )

  otherUserStyle = () => (
    { 
      ...this.allMessagesStyle(),
      backgroundColor: "rgba(255,209,186,0.3)",
      float: "left",
      clear: "both"
    }
  )
  
  returnMessages = () => {
    return this.props.messages.map( (message) => (
      <Message
        message = { message.content } 
        username = { message.username }
        style = {this.isCurrentUser(message.username) ? this.currentUserStyle() : this.otherUserStyle()}
        centered = {this.isCurrentUser(message.username) ? "right" : "left" }
      />
    ))
  }

  render() {
    return (
      <div
        className = "messages"
        style = {{
          padding: "50px"
        }}
      >
        <div>
          { this.returnMessages() }
        </div>
        <div style={{ float:"left", clear: "both" }}
             ref={(el) => { this.messagesEnd = el; }}>
        </div>
      </div>
    )
  }
}

export default Messages