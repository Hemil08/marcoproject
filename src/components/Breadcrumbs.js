import React from 'react'
import { useLocation } from "react-router-dom"
import { Link } from 'react-router-dom'

const Breadcrumbs = () => {

    const location = useLocation()

    let currentLink = ''

    const crumbs = location.pathname.split('/')
    .filter(crumb =>crumb !== '')
    .map(crumb =>{
        currentLink += `${crumb}`

        return(
             <p className='crumb'>{crumb}</p>
        )
    })

  return (
    <div className='breadcrumbs'>
        <h1>{crumbs}</h1>
        <div className='breadcrumbs_nav'><span>HOME /{crumbs}</span></div>
    </div> 
  )
}

export default Breadcrumbs