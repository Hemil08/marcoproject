import React from 'react'
import MenuData from './MenuData'
import Menu_top_Card from './Menu_top_Card'
import { useState } from 'react'
import MenuNavbar from './MenuNavbar'

const Menu_top = () => {

  const [selectedCategory, setSelectedCategory] = useState('All Menu');

  // Filter items based on selected category

  const filteredItems = MenuData.filter((item) => {
    return selectedCategory === 'All Menu' || item.category === selectedCategory;
  });

  return (
    <div className='menu_top'>

      <div className='menu_navbar_section'>
        <div className='menu_header_section'>
          <h1>What kind of Foods we serve for you</h1>
          <p>Who are in extremely love with eco friendly system.</p>
        </div>

        <div>
          <MenuNavbar
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        </div>

        <div className='menu_card_section'>
          {filteredItems.map((item) => (<Menu_top_Card key={item.id} item={item} />))}
        </div>
      </div>

      <div className='menu_form_section'>
        <div className='menu_form_description_part'>
          <h1>Reserve Your Seats to Confirm if You Come with Your Family</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.</p>
        </div>

        <div className='menu_form_form_part'>
            <form className='menu_form'>
              <input type='text' placeholder='Your Name'/>
              <input type='text' placeholder='Your Email Address'/>
              <input type='tel' max='10' placeholder='Phone Number'/>
              <input type='date' placeholder='Select Date & time'/>
              <select name="events" id="events">
                <option>Select Event</option>
                <option value="Event One">Event One</option>
                <option value="Event Two">Event Two</option>
                <option value="Event Three">Event Three</option>
                <option value="Event Four">Event Four</option>
              </select>

              <button className='common_button form_button'>Make Reservation</button>
            </form>

        </div>
      </div>

    </div>
  )
}

export default Menu_top