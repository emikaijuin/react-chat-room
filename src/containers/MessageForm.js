import React, { Component } from "react"

class MessageForm extends Component {
  state = {
    message: '',
    error: ''
  }

  handleMessageInput = event => {
    this.setState({ message: event.target.value })
  }

  sendMessage = event => {
    event.preventDefault()
    if (this.messageIsSubmittable()) { 
      this.props.appendMessage({
        content: this.state.message,
        username: "emikaijuin", // hardcoding to be replaced later
        timestamp: Date.now()
      }) 
      this.setState({message: ''})
    }
  }

  messageIsSubmittable = () => (
    this.state.message.length < 500 ? true : false
  )


  render() {
    return (
      <form onSubmit={ this.sendMessage }>
        <div>  
          <textarea 
            onChange = { this.handleMessageInput}
            value = { this.state.message }
            style = {{
              position: "absolute",
              height: "15%",
              width: "80%",
              boxSizing: "border-box",
              border: "0",
              outline: "none"
            }}
          />
          <span style={{
            position: "absolute",
            bottom: "2.5%",
            color: "red"
          }}>
            { this.messageIsSubmittable() ? "" : "Max length is 500 characters"}
          </span>
        </div>
      </form>
    )
  }
}

export default MessageForm