import React from 'react'

import './Card.css'
import {star} from '../../images'

const Card = () => {
  return (
    <div className='card'>
      <div className='card-image flex__center'>
        <img src={star} alt="star" />
      </div>
      <div className='card-text'>
        <h1>How did we do?</h1>
        <p>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
      </div>
      <div className='card-rate'>
        <div className='card-rate-ratings'></div>
        <button type='button' className='card-rate-button'>Submit</button>
      </div>
    </div>
  )
}

export default Card