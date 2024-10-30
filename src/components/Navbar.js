import React from 'react';
import { Link } from 'react-router-dom'

const Navbar = ({ isScrolled }) => {


  
  return (
    <div className={`navbar ${isScrolled ? 'scrolled' : ''}`}> 
        <Link to="/">HOME</Link>
        <Link to="/about">ABOUT</Link>
        <Link to="/menu">MENU</Link>
        <Link to="/gallery">GALLERY</Link>
        <Link to="/blog">BLOG</Link>
        <Link to="/contact">CONTACT</Link>
    </div>
  )
} 

export default Navbar