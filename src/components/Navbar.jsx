import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className="logo">Chat App</span>
      <div className='user'>
          <img src='https://images.pexels.com/photos/5049506/pexels-photo-5049506.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt=''/>
          <span>Doğukan</span>
          <button>Logout</button>
      </div>
    </div>
  )
}

export default Navbar