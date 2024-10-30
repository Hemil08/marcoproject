import React from 'react'
import main_logo from '../images/MAIN_LOGO.webp'
import Navbar from './Navbar';
import Contact_top from './Contact_top';
import Footer from './Footer';
import Breadcrumbs from './Breadcrumbs';
import { useEffect,useState } from 'react';

const Contact = () => {

  const[isScrolled,setIsScrolled] = useState(false);

    useEffect(()=>{
        const handleScroll = () =>{
            setIsScrolled(window.scrollY > 30);
        };

        window.addEventListener('scroll',handleScroll);
        return () => window.removeEventListener('scroll',handleScroll);
    },[])

  return (
    <div className='contact_page'>
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

      <div className='message_section'>
        <div className='address_section'>
          <div className='sub_address_section'>
            <span class="fas fa-home"></span>
            <div>
              <h4>Binghamton, New York</h4>
              <p>4343 Hinkle Deegan Lake Road</p>
            </div>
          </div>

          <div className='sub_address_section'>
            <span class="fas fa-phone-alt"></span>
            <div>
              <h4>00 (958) 9865 562</h4>
              <p>Mon to Fri 9am to 6 pm</p>
            </div>
          </div>

          <div className='sub_address_section'>
            <span class="fas fa-envelope"></span>
            <div>
              <h4>support@colorlib.com </h4>
              <p>Send us your query anytime!</p>
            </div>
          </div>

        </div>

        <form className='message_form'>
          <div className='left_message_side'>
            <input type='text' placeholder='Enter your name'/>
            <input type='email' placeholder='Enter email address'/>
            <input type='text' placeholder='Enter subject'/>
          </div>

          <div>
            <textarea type='text' placeholder='Enter Message'/>
            <button type='submit' className='common_button message_button'>SEND MESSAGE</button>
          </div>
        </form>

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

export default Contact