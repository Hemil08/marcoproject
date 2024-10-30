import React from 'react'
import About_top from './About_top';
import main_logo from '../images/MAIN_LOGO.webp'
import Navbar from './Navbar';
import content_img1 from '../images/content1.webp'
import content_img2 from '../images/content2.webp'
import content_img3 from '../images/content3.webp'
import Review from './Review';
import Contact_top from './Contact_top'
import Footer from './Footer'
import Breadcrumbs from './Breadcrumbs';
import { useEffect,useState} from 'react';

const About = () => {

  const[isScrolled,setIsScrolled] = useState(false);

    useEffect(()=>{
        const handleScroll = () =>{
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll',handleScroll);
        return () => window.removeEventListener('scroll',handleScroll);
    },[])

  return (
    <div>
      <div className='main_page'>
        <div className='content'>
          
          <span><img src={main_logo} alt="Main Logo" /></span>

          <div className='nav_section'>
            <hr />
            <Navbar isScrolled={isScrolled}/>
            <hr />
          </div>

          <Breadcrumbs/>
        </div>

      </div>

      <div className='service_section'>
        <div className='service_section_header_section'>
          <h1>What Kind of Services we Offer</h1>
          <p>Who are in extremely love with eco friendly system.</p>
        </div>

        <div className='service_section_content_section'>
          <div className='single_content'>
            <img src={content_img1}></img>
            <h3><a href='/'>Bread Fruit Cheese Sandwich</a></h3>
            <p>inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct women face higher conduct.</p>
          </div>

          <div className='single_content'>
            <img src={content_img2}></img>
            <h3><a href='/'>Beef Cutlet with Spring Onion</a></h3>
            <p>inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct women face higher conduct.</p>
          </div>

          <div className='single_content'>
            <img src={content_img3}></img>
            <h3><a href='/'>Meat with sauce & Vegetables</a></h3>
            <p>inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct women face higher conduct.</p>
          </div>
        </div>
      </div>

      <div>
        <About_top />
      </div>

      <div>
        <Review/>
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

export default About;