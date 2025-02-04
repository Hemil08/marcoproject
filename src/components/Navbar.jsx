import React, { useState } from 'react';
import { Link } from 'react-router-dom'

const Navbar = ({ isScrolled }) => {

  const [isOpen,setIsOpen] = useState(false);

  const toggleNavbar = () =>{
    setIsOpen(!isOpen);
  }
  
  return (

    <>
    <button className="icon" onClick={toggleNavbar}>
          <i className='fa fa-bars'></i> 
        </button>

    <div className={`navbar ${isOpen ? 'open' : ''}  ${isScrolled ? 'scrolled' : ''}`}> 
        <Link to="/" onClick={toggleNavbar}>HOME</Link>
        <Link to="/about" onClick={toggleNavbar}>ABOUT</Link>
        <Link to="/menu" onClick={toggleNavbar}>MENU</Link>
        <Link to="/gallery" onClick={toggleNavbar}>GALLERY</Link>
        <Link to="/blog" onClick={toggleNavbar}>BLOG</Link>
        <Link to="/contact" onClick={toggleNavbar}>CONTACT</Link>
        
    </div>
    </>
  )
} 

export default Navbar