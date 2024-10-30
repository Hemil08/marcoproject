import React from 'react'
import MenuData from './MenuData'
import MenuNavbar from './MenuNavbar'
import Gallery_top_Card from './Gallery_top_Card'
import {useState} from 'react'

const Gallery_top = () => {

    const[selectedCategory,setSelectedCategory] = useState('All Menu')

    const filteredItems = MenuData.filter((item) => {
        return selectedCategory === 'All Menu' || item.category === selectedCategory;
      });
    

  return (
    <div className='gallery_top'>

        <div className='Gallery_header_Section'>
            <h1>Food and Customer Gallery</h1>
            <p>Who are in extremely love with eco friendly system.</p>
        </div>

        <div>
            <MenuNavbar
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
            />
        </div>

        <div className='gallery_image_section'>
            {filteredItems.map((item) => (<Gallery_top_Card key={item.id} item={item} />))}
        </div>

    </div>
  )
}

export default Gallery_top