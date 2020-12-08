// import React, { useState } from "react";
// const Message = () => {
//   const [content, changeContent] = useState([])
//   const [message, changeMessage] = useState("")
//   const ReactEvent = () => {
//     changeContent([...content, message])
//   }
//   const ReactMessage = (e:any) => {
//     changeMessage(e.target.value)
//   }
//   const clearMessage = (i:any) => {
//     const currentMessages = content
//     currentMessages.splice(i, 1)
//     changeContent([...currentMessages])
//   }
//   let allMessages = content.map((item, i) => {
//     return (
//       <li> {item} <button type="button" onClick={() => { clearMessage(i) }}>clear</button></li>
//     )
//   })
//   return (
//     <div className="message-board justify-content-center">
//       <div className="row pt-2">
//         <div className="message-content-wrap justify-content-center">
//           <div className="message-card">
//             <div className="message-card-body">
//               <h5 className="message-card-title">Message Board</h5><br /><br />
//               <ul className="all-messages">{allMessages}</ul>
//               <textarea className="message-input" rows={5} cols={30} name="message" onChange={ReactMessage} ></textarea><br /> <br />
//               <button className="send-message-btn" onClick={ReactEvent}>Send</button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
// export default Message

import React, { useState } from "react";
const Message = () => {
  const [content, changeContent] = useState([])
  const [message, changeMessage] = useState("")
  const ReactEvent = () => {
    changeContent([...content, message])
  }
  const ReactMessage = (e:any) => {
    changeMessage(e.target.value)
  }
  const clearMessage = (i:any) => {
    const currentMessages = content
    currentMessages.splice(i, 1)
    changeContent([...currentMessages])
  }
  let allMessages = content.map((item, i) => {
    return (
      <li> {item} <button type="button" onClick={() => { clearMessage(i) }}>clear</button></li>
    )
  })
  return (
    <div className="message-board justify-content-center">
      <div className="row pt-2">
        <div className="message-content-wrap justify-content-center">
          <div className="message-card">
            <div className="message-card-body">
              <h5 className="message-card-title">Message Board</h5><br /><br />
              <ul className="all-messages">{allMessages}</ul>
              <textarea className="message-input" rows={5} cols={30} name="message" onChange={ReactMessage} ></textarea><br /> <br />
              <button className="send-message-btn" onClick={ReactEvent}>Send</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Message