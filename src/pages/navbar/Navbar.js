import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'
function Navbar() {
  return (
    <div className='navbar-container'>
      <Link to='/'><div className="logo">ieee</div></Link>
      <Link to='/dashboard'><div className='name'>AP</div></Link>
    </div>
  )
}

export default Navbar