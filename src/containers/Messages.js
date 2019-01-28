import React, {Component} from "react";
import Message from "../components/Message"

class Messages extends Component {
  state = {}

  returnMessages = () => {
    return this.props.messages.map( message => (
      <Message 
        message={message.content} 
        username={message.username}
      />
    ))
  }

  render() {
    return (
      <div>
        { this.returnMessages() }
      </div>
    )
  }
}

export default Messages