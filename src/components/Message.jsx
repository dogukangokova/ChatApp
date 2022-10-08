import React from 'react'

const Message = () => {
  return (
    <div className='message owner'>
      <div className="messageInfo">
        <img src='https://images.pexels.com/photos/5049506/pexels-photo-5049506.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'></img>
        <span>just now</span>
      </div>
      <div className="messageContent">
        <p>Hello</p>
        <img src='https://images.pexels.com/photos/5049506/pexels-photo-5049506.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt=''></img>
      </div>
    </div>
  )
}

export default Message