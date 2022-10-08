import React, {useState} from 'react'
import { useNavigate, Link} from 'react-router-dom';
import {auth} from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const [err, setErr] = useState(false)
  const navigate = useNavigate()

  const handleSubmit =  async(e)=>{
  e.preventDefault()
  const email = e.target[0].value;
  const password = e.target[1].value;
  //console.log(e.target[4].value)
  try {
    await signInWithEmailAndPassword(auth, email, password);
    navigate("/")
    
  } catch (err) {
    setErr(true);
  }
    
  };
  return (
    <div className='formContainer'>
      <div className='formWrapper'>
        <span className='logo'>Chat App</span>
        <span className='title'>Login</span>
        <form onSubmit={handleSubmit}>
          <input required type="email" placeholder="email" />
          <input required type="password" placeholder="password" />
          <button>Login</button>
          {err && <span>Something went wrong</span>}
        </form>
        <p>You don't have an account? <Link to="/register">Register</Link></p>
      </div>
    </div>
  )
}

export default Login