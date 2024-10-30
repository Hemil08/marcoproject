import React, {useState,useEffect } from 'react'
import user_img from '../images/user.png.webp'

const reviews = [
    {
        id: 1,
        name: "Hulda Sutton",
        review: "Accessories Here you can find the best computer accessory for your laptop, monitor, printer, scanner, speaker.",
        img: user_img
    },
    {
        id: 2,
        name: "John Doe",
        review: "The quality and service were absolutely fantastic, and I'd highly recommend this place for anyone.",
        img: user_img
    },
    {
        id: 3,
        name: "Jane Smith",
        review: "Really great place, the customer service is friendly and attentive, and the product is top-notch.",
        img: user_img
    },
    {
        id: 4,
        name: "Alice Johnson",
        review: "Excellent! Couldn't be happier with my purchase. Will definitely come back for more accessories!",
        img: user_img
    }
];


const Review = () => {

    const [currentIndex,setCurrentIndex] = useState(0);

    useEffect(()=>{
        const intervalId = setInterval(()=>{
            setCurrentIndex((prevIndex)=>(prevIndex+1) % reviews.length);
        },3000)

        return() => clearInterval(intervalId);
    },[])

    const selectReview = (index) =>{
        setCurrentIndex(index);
    }

  return (
    <div className='review'>
        <div className='single_review'>
            <img src={reviews[currentIndex].img} alt="User"/>
            <h4>{reviews[currentIndex].name}</h4>

            <div className='star'>
                <span className='fa fa-star checked'></span>
                <span className='fa fa-star checked'></span>
                <span className='fa fa-star checked'></span>
                <span className='fa fa-star checked'></span>
                <span className='fa fa-star checked'></span>
            </div>

            <p>
                {reviews[currentIndex].review}
            </p>
        </div>

        <div className="review-nav">
        {reviews.map((_, index) => (
          <span
            key={index}
            className={`dot ${currentIndex === index ? 'active-dot' : ''}`}
            onClick={() => selectReview(index)}
          ></span>
        ))}
      </div>

    </div>
  )
}

export default Review