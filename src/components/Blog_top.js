import React from 'react'
import blog_img from '../images/b1.jpg.webp'

const Blog_top = () => {
  return (
    <div className='blog_top'>
        <div className='blog_header_section'>
            <h1>Latest From Our Blog
            </h1>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
        </div>

        <div className='blog_lower_section'>
            <div className='single_blog'>
                <img src={blog_img}/>
                <span>10 Jan 2018</span>
                <h4><a>Cooking Perfect Fried Rice in minutes</a></h4>
                <p>inappropriate behavior ipsum dolor sit amet, consectetur.</p>

                <div className='reactions'>
                    <span>15 Likes</span>
                    <span>02 Comments</span>
                </div>
            </div>

            <div className='single_blog'>
                <img src={blog_img}/>
                <span>10 Jan 2018</span>
                <h4><a>Cooking Perfect Fried Rice in minutes</a></h4>
                <p>inappropriate behavior ipsum dolor sit amet, consectetur.</p>

                <div className='reactions'>
                    <span>15 Likes</span>
                    <span>02 Comments</span>
                </div>
            </div>

            <div className='single_blog'>
                <img src={blog_img} />
                <span>10 Jan 2018</span>
                <h4><a>Cooking Perfect Fried Rice in minutes</a></h4>
                <p>inappropriate behavior ipsum dolor sit amet, consectetur.</p>

                <div className='reactions'>
                    <span>15 Likes</span>
                    <span>02 Comments</span>
                </div>
            </div>

            <div className='single_blog'>
                <img src={blog_img}/>
                <span>10 Jan 2018</span>
                <h4><a>Cooking Perfect Fried Rice in minutes</a></h4>
                <p>inappropriate behavior ipsum dolor sit amet, consectetur.</p>

                <div className='reactions'>
                    <span>15 Likes</span>
                    <span>02 Comments</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Blog_top