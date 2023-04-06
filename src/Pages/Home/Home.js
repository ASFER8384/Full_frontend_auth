import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className='home'>
      Home
      <Link style={{textDecoration:"none"}} to="/login">
        <span style={{color:"blue",marginLeft:"20px"}}>LOGIN!</span>
      </Link>
    </div>

  )
}
