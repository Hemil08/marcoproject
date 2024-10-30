import React from 'react'

const Gallery_top_Card = ({item}) => {
  return (
    <div className='Gallery_card'>
        <img src={item.img}/>
    </div>
  )
}

export default Gallery_top_Card