import React from 'react'

const Chats = () => {
  return (
    <div className='chats'>
       <div className="userChat">
        <img src='https://images.pexels.com/photos/5049506/pexels-photo-5049506.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'></img>
        <div className="userChatInfo">
          <span>Jane</span>
          <p>Hello</p>
        </div>
      </div>
      <div className="userChat">
        <img src='https://images.pexels.com/photos/5049506/pexels-photo-5049506.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'></img>
        <div className="userChatInfo">
          <span>Jane</span>
          <p>Hello</p>
        </div>
      </div>
      
    </div>
  )
}

export default Chats