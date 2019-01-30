import React, { Component } from "react"

class Conversation extends Component {

  showMembers = () => (
    <div style={{
      overflowY: "hidden",
      padding:"5px 0"
    }}>
      <div className = "conversation-members"
        style = {{
          overflowY: "auto",
          padding: "5px 0",
          fontSize: "0.75rem"
        }}
      >
        { this.props.conversation.members.join(" // ") }
      </div>
    </div>
  )

  render() {
    return (
      <li 
        className = "conversation"
        style = {{
          listStyleType: "none",
          borderBottom: "1px solid teal"
        }}
        onClick = { this.props.selectActiveConversation }
      >
        <div style={{
          width: "100%",
          boxSizing: "border-box",
          height: "7vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "10px 0",
          fontSize: "1.25rem"
        }}>
          <img 
            className = "conversation-avatar"
            src = {`https://api.adorable.io/avatars/112/${this.props.conversation.members}.png`}
            style = {{
              height: "100%",
              borderRadius: "100%"
            }}
          />
          <div className = {`conversation-name ${this.props.isActive ? "active-conversation" : ""}`}
            style = {{
              padding: "10px 0"
            }}
            id = {this.props.conversation.id}
          > 
            { this.props.conversation.name ? this.props.conversation.name : this.props.conversation.members.join(" & ") }
          </div>
        </div>
        { this.props.conversation.members.length > 1 ? this.showMembers() : "" }
      </li>
    )
  }
}
export default Conversation