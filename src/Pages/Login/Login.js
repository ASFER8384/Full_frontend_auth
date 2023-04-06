import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { BASE_URL } from '../BaseUrl'
import "./Login.css"

export default function Login() {


  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function handleSubmit(e) {

    e.preventDefault()
    const response = await fetch("https://backend-auth-h3bi.onrender.com/user/login", {
      method: "POST",
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        email,
        password,
      })
    })

    const data = await response.json()
    if (data._id) {
      navigate("/dash")
      localStorage.setItem("email",data.email)
    } else {
      alert("Check username an password")
    }
    console.log(data)
  }



  return (
    <div className='login'>
      <div className='login-box'>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <input
            className='inp-log top-space'
            type="email"
            placeholder='Enter Email'
            name='email'
            id='email'
            onChange={(e) => { setEmail(e.target.value) }}

          /><br />
          <input
            className='inp-log'
            type="password"
            placeholder='Enter Password'
            name='password'
            id='password'
            onChange={(e) => { setPassword(e.target.value) }}

          /><br />
          <button type='submit'>Login</button>
        </form>
        <div style={{ marginTop: "30px" }}>
          <Link to="/register" className='link-reg'>
            <span style={{ color: "black" }}>Don't Have Account? Register</span>
          </Link>
          <Link to="/forgetpassword" className='link-reg'>
            <p style={{ color: "black", textAlign: "center" }}>Forget Password</p>
          </Link>
        </div>
      </div>
    </div>
  )
}
