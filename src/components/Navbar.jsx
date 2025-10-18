import React from 'react'
import logo from '../assets/logo.png'

const Navbar = () => {
  return (
    <div>
      <img src={logo} alt= ""/>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Service</li>
        <li>Project</li>
        <li>Contact</li>
      </ul>
      <button>Get Started</button>
    </div>
  )
}

export default Navbar
