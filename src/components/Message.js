import React from "react"

const Message = props => (
  <div>
    <span>
      {props.username}
    </span>
    <div>
      { props.message } 
    </div>
  </div>
)

export default Message