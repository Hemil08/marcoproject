import React from 'react'

const Menu_top_Card = ({item}) => {
  return (
    <div className='menu_card'>
            <div className='uppersection_menu_card'>
                <h4>{item.title}</h4>
                <h4 className='price'>{item.price}</h4>
            </div>
            <p>{item.desc}</p>
            
    </div>
  )
}

export default Menu_top_Card