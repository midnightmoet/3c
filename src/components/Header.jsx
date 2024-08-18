import React from 'react'
import '../styles/Header.css'

const Header = () => {
  return (
    <header className="header">
      <img src="../src/assets/boho.jpg" alt="Sun Moon and Stars" className="cover-photo" />
      <h3>Champagne Creative Creations</h3>
      <nav className="nav">
        <ul className="nav-list">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/services">Services</a></li>
        <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
