import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import "./dashboard.css"

export default function Dash() {

  const [email,setEmail]=useState("")

  useEffect(()=>{
  const storedEmail = localStorage.getItem("email")

  if(storedEmail){
    setEmail(storedEmail)
  }
  },[])
  
const handleOut=()=>{
  localStorage.removeItem("email")
}


  return (
    <>
    <div className="dash" >
        <Link >
       <h5 className="logout">DOT APP</h5>
        </Link>
        <Link to="/">
       <h3 className="logout" onClick={handleOut}>LOGOUT</h3>
        </Link>
    </div>
    <div className="user">
      <h1>USER</h1><br></br>
    </div>
    <div className="user">
      <h1>Email:{email}</h1>
    </div>
    </>
  )
}
