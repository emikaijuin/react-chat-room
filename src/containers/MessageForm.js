import React, { Component } from "react"

class MessageForm extends Component {
  state = {
    message: '',
    error: ''
  }

  handleMessageInput = event => {
    this.setState({ message: event.target.value })
  }

  handleFormSubmit = event => {
    event.preventDefault()
    if (this.messageIsSubmittable()) { 
      this.props.appendMessage(this.state.message) 
      this.setState({message: ''})
    }
  }

  messageIsSubmittable = () => (
    this.state.message.length < 500 ? true : false
  )


  render() {
    return (
      <form onSubmit={ this.handleFormSubmit }>
        <div>  
          <input 
            type = "text" 
            onChange = { this.handleMessageInput}
            value = { this.state.message }
          />
          <span>{ this.messageIsSubmittable() ? "" : "Max length is 500 characters"}</span>
        </div>
      </form>
    )
  }
}

export default MessageForm