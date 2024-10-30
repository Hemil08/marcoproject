import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
  return (
    <div className='footer'>
        <p>Copyright ©2024 All rights reserved | This template is made with by Colorlib</p>
        <ul className='social_section'>
            <li><a><i className='fab fa-facebook'></i></a></li>
            <li><a><i className='fab fa-twitter'></i></a></li>
            <li><a><i className='fab fa-dribbble'></i></a></li>
            <li><a><i className='fab fa-behance'></i></a></li>
        </ul>
    </div>
  )
}

export default Footer