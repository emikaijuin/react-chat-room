import React from "react"

const Message = props => (
  <div 
    className="message"
    style = { props.style } 
  >
    <span style={{
      float: props.centered,
      color: "gray"
    }}>
      {props.username}
    </span>
    <div style={{
      clear: "both"
    }}>
      { props.message } 
    </div>
  </div>
)

export default Message