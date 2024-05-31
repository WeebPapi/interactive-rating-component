import React from 'react'

import {thankyou} from '../../images'
import './ThankYou.css'

const ThankYou = ({val}) => {
  return (
    <div className='thankyou'>
      <div className='thankyou-img'>
        <img src={thankyou} alt="Thank You" />
      </div>
      <div className='thankyou-selection flex__center'>You selected {val} out of 5</div>
      <div className='thankyou-bottom flex__center'>
        <h1>Thank you!</h1>
        <p>We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>
      </div>
    </div>
  )
}

export default ThankYou