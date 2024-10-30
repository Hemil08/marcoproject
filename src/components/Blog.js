import React from 'react'
import main_logo from '../images/MAIN_LOGO.webp'
import Navbar from './Navbar';
import Blog_top from './Blog_top';
import Contact_top from './Contact_top';
import Footer from './Footer';
import Breadcrumbs from './Breadcrumbs';
import { useState,useEffect } from 'react';

const Blog = () => {

  const[isScrolled,setIsScrolled] = useState(false);

    useEffect(()=>{
        const handleScroll = () =>{
            setIsScrolled(window.scrollY > 30);
        };

        window.addEventListener('scroll',handleScroll);
        return () => window.removeEventListener('scroll',handleScroll);
    },[])

  return (
    <div>

      <div className='main_page'>
        <div className='content'>
          <span><img src={main_logo}></img></span>

          <div className='nav_section'>
            <hr />
            <Navbar isScrolled={isScrolled}/>
            <hr />
          </div>
          <Breadcrumbs/>
        </div>


      </div>

      <div>
        <Blog_top/>
      </div>

      <div>
        <Contact_top/>
      </div>

      <div>
        <Footer/>
      </div>

    </div>
  )
}

export default Blog