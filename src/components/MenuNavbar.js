import React from 'react'


const MenuNavbar = ({selectedCategory,setSelectedCategory}) => {

    const categories = ['All Menu', 'Breakfast', 'Lunch', 'Dinner','Budget Meal','Buffet'];

  return (
    <div className='menunavbar'>
        <ul>
            {categories.map((category)=>(
                <li key={category} className={`menu-button ${selectedCategory === category ? 'active' : ''}`}>
                    <button
                        onClick={()=> setSelectedCategory(category)}
                    >   
                    {category}
                    </button> 
                </li>
            ))}
        </ul>
    </div>
  )
}

export default MenuNavbar