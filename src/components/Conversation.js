import React from "react"

const Conversation = props => (
  <li 
    className = "conversation"
    style = {{
      listStyleType: "none",
      width: "100%",
      boxSizing: "border-box",
      height: "7vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "10px 0",
      fontSize: "1.25rem",
      borderBottom: "1px solid teal"
    }}
    onClick = { props.selectActiveConversation }
  >
    <img 
      src = {`https://api.adorable.io/avatars/112/${props.conversation.participants}.png`}
      style = {{
        height: "100%",
        borderRadius: "100%"
      }}
    />
    <div className = {`conversation-name ${props.isActive ? "active-conversation" : ""}`}
      style = {{
        padding: "10px 0"
      }}
      id = {props.conversation.id}
    > 
      { props.conversation.name ? props.conversation.name : props.conversation.participants.join(" & ") }
    </div>
  </li>
)

export default Conversation