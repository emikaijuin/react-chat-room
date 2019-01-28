import React, {Component} from "react";
import Message from "../components/Message"

class Messages extends Component {
  state = {}

  returnMessages = () => {
    console.log(this.props.messages)
    return this.props.messages.map( message => (
      <Message 
        message={message} 
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