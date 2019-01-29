import React from "react";

const Message = props => (
  <div style={{
    float: props.centered,
    clear: "both",
    display: "flex",
    flexDirection: props.centered === "right" ? "row-reverse" : "row",
    alignItems: "flex-end",
    marginBottom: "15px"
  }}>
    <img 
      className = "message-avatar"
      src={`https://api.adorable.io/avatars/112/${props.username}.png`}
      style={{
        height: "2rem",
        borderRadius: "100%",
        margin: "0 15px"
      }}
    />

    <div 
      className="message"
      style = { props.style } 
      >
      <div>
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
    </div>  
  </div>
)

export default Message