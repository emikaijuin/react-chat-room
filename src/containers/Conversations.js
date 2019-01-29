import React, {Component} from "react";
import Conversation from "../components/Conversation"

class Conversations extends Component {
  state = {
    activeConversationId: null
  }

  render() {
    return (
      <div style = {{
        display: "flex",
        flexWrap: "wrap",
        alignContent: "center"
      }} >
        <ul style = {{
          width: "70%",
          paddingLeft: "0",
          margin: "auto"
        }}>
          { 
            this.props.conversations.map(conversation => (
              <Conversation 
                conversation = { conversation } 
                selectActiveConversation = { this.props.selectActiveConversation }
                isActive = {conversation.id == this.props.activeConversationId ? true : false}
              />
            ))
          }
        </ul>
      </div>
    )
  }
}

export default Conversations