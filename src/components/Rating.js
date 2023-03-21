import React from 'react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';


const Rating = ({ rating }) => {

  return (
    <div className='rating'>
      {
        [...Array(rating)].map((_, i)=>{
            return(
                <span key={i}><AiFillStar/></span>
            )
        })
      }
      {
        [...Array( 5-rating )].map((_, i)=>{
            return(
                <span key={i}><AiOutlineStar/></span>
            )
        })
      }
    </div>
  )
}

export default Rating
