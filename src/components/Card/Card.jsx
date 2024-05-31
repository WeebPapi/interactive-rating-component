import React from 'react'

import './Card.css'
import {star} from '../../images'
import {RateIcon} from '../../components/'

const Card = ({rated, setRated}) => {
  
  const [value, setValue] = React.useState(0)
  console.log("The value is "+value)
  console.log("The rated is "+rated)
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
        <div className='card-rate-ratings'>
          {[1,2,3,4,5].map((num) => (
            <RateIcon key={num} val={num} setValue={setValue} />
          ))}
        </div>
        <button type='button' className='card-rate-button' onClick={() => {
          setRated(value)
        }}>Submit</button>
      </div>
    </div>
  )
}

export default Card