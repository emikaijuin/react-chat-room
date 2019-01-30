import React, { Component } from "react"
import Socket from '../utils/socket'

class MessageForm extends Component {
  state = {
    message: '',
    error: ''
  }

  checkForSubmit = event => {
    if (event.keyCode === 13 && !event.shiftKey) {
      this.sendMessage(event)
    }
  }

  handleMessageInput = event => {
    this.setState({ message: event.target.value })
  }

  sendMessage = event => {
    event.preventDefault()
    if (this.messageIsSubmittable()) {
      Socket.emit('BROADCAST_MESSAGE', {
        username: this.props.username,
        message: this.state.message,
        timestamp: Date.now()
      })

      this.setState({message: ''})
    }
  }

  messageIsSubmittable = () => (
    this.state.message && this.state.message.length < 500 ? true : false
  )


  render() {
    return (
      <form onSubmit = { this.sendMessage } >
        <textarea
          type = "text"
          onKeyDown = { this.checkForSubmit } // text areas don't submit form on enter, so additional event listener is added on key down to check if user hit enter iwthout shift
          onChange = { this.handleMessageInput} 
          value = { this.state.message }
          style = {{
            position: "absolute",
            height: "15%",
            width: "75%",
            boxSizing: "border-box",
            border: "0",
            outline: "none",
            padding: "20px"
          }}
        />
        <input 
          type = "submit"
          className = "btn btn-outline-info"
          style = {{
            position: "absolute",
            right: "0",
            bottom: "10%",
            transform: "translate(-25%, 50%)"
          }}
          disabled = { !this.messageIsSubmittable() }
          />
        <span style={{
          position: "absolute",
          bottom: "2.5%",
          color: "red"
        }}>
          { this.state.message && !this.messageIsSubmittable() ? "Max length is 500 characters" : ""}
        </span>
      </form>
    )
  }
}

export default MessageForm