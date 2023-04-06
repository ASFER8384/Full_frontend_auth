import React, { useState } from 'react'
import {Link, useNavigate} from "react-router-dom"
import { BASE_URL } from '../BaseUrl'
import "./Register.css"


export default function Register() {

const navigate = useNavigate()

  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  async function handleRegister(e) {
    e.preventDefault()
    const response = await fetch("https://backend-auth-h3bi.onrender.com/user/register", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        username,
        email,
        password
      })
    })

    const data = await response.json()

    if(data.status === "ok"){
      navigate("/")
    }else{
      alert("User already Exist")
    }
    console.log(data)
  }


  return (
    <div className='register'>
      <div className='register-box '>
        <h3>Register NoW!</h3>
        <form onSubmit={handleRegister}>
          <input
            type="text"
            name="name"
            placeholder='Enter Username'
            className='top-space reg-inp'
            onChange={(e) => { setUsername(e.target.value) }}
          /><br />

          <input
            type="email"
            name="email"
            placeholder='Enter Email'
            className='reg-inp'
            onChange={(e) => { setEmail(e.target.value) }}
          /><br />

          <input
            type="password"
            name="password"
            placeholder='Enter Password'
            className='reg-inp'
            onChange={(e) => { setPassword(e.target.value) }}
          /><br />

          <button>Register</button>
        </form>
        <Link to="/" className='link'>
        <span style={{color:"black"}}>Alredy Account? Sign in</span>
        </Link>
        
      </div>
        
    </div>
  )
}
