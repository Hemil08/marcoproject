import React from 'react'
import about_section_burger_photo from '../images/about_burger_img.webp'

const About_top = () => {
    return (
        <div className='about_top'>
            <div className='about_description_section'>
                <h1>About Our Story</h1>
                <p>Who are in extremely love with eco friendly system. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <a href="/" className='common_button view_full_menu_button'>
                    VIEW FULL MENU
                </a>
            </div>

            <div className='about_top_image_section'>
                <img src={about_section_burger_photo} />
            </div>
        </div>
  )
}

export default About_top