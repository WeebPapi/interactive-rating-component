import React from 'react'
import './RateIcon.css'


const RateIcon = ({val, setValue}) => {
  const handleClick = (value) => {
    setValue(value)  
  }

  return (
    <div className='rateicon flex__center'>
      <button className='rateicon-button flex__center' onClick={(e) => {
        const rateVal = parseInt(e.target.innerHTML)
        e.target.style.backgroundColor = 'rgba(252, 118, 20, 1)'
        e.target.style.color = 'white'
        handleClick(rateVal)
        
      }}>{val}</button>
    </div>
  )
}

export default RateIcon