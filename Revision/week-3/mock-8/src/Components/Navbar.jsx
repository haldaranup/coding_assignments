import React from 'react'
import { Link } from 'react-router-dom'
import "../Styles/nav.css"

const Navbar = () => {
  return (
    <nav className='nav'>
        <Link to="/login">Admin</Link>
        <Link to="/signup">User</Link>
        
    </nav>
  )
}

export default Navbar