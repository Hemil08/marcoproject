import React,{useState,useEffect} from 'react'
import About from './About'
import Menu from './Menu'
import Navbar from './Navbar'
import About_top from './About_top'
import main_logo from '../images/MAIN_LOGO.webp'
import Menu_top from './Menu_top'
import Gallery_top from './Gallery_top'
import Review from './Review'
import Blog_top from './Blog_top'
import Contact_top from './Contact_top'
import Footer from './Footer'

const Home = () => {

    const[isScrolled,setIsScrolled] = useState(false);

    useEffect(()=>{
        const handleScroll = () =>{
            setIsScrolled(window.scrollY > 30);
        };

        window.addEventListener('scroll',handleScroll);
        return () => window.removeEventListener('scroll',handleScroll);
    },[])

    return (
        <div className='home'>

            <div className='main_section'>
            
                <span><img src={main_logo} alt="Main Logo" /></span>
        

                <div className='nav_section'>
                    <hr />
                    <Navbar isScrolled={isScrolled}/>
                    <hr />
                </div>

                <div className='main_description_section'>
                    <span>WIDE OPTIONS OF CHOICE</span>
                    <h1>Delicious Recipes</h1>
                    <p>
                        inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct standards especially in the workplace. That’s why it’s crucial that, as women.
                    </p>

                    <a href='/' className='checkOurMenu_button common_button'>CHECK OUR MENU</a>
                </div>

            </div>

            <div className='about_section'>
                <About_top/>
            </div>

            <div className='menu_section'>
                <Menu_top/>
            </div>

            <div className='gallery_section'>
                <Gallery_top/>
            </div>

            <div className='review_section'>
                <Review/>
            </div>

            <div className='blog_section'>
                <Blog_top/>
            </div>

            <div className='contact_top'>
                <Contact_top/>
            </div>

            <div className='footer_section'>
                <Footer/>
            </div>

            
        </div>
    )
}

export default Home