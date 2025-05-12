import React from 'react'
import { assets } from '../../assets/assets'

const Companies = () => {
  return (
    <div>
        <p className='text-center'>Trusted by learners from </p>
        <br />
        <div className='flex lg:w-3/5 w-9/10 m-auto justify-around flex-wrap md:gap-0 gap-7'>
            <img src={assets.microsoft_logo} alt="microsoft_logo" />
            <img src={assets.walmart_logo} alt="walmart_logo" />
            <img src={assets.accenture_logo} alt="accenture_logo" />
            <img src={assets.adobe_logo} alt="adobe_logo" />
            <img src={assets.paypal_logo} alt="paypal_logo" />
        </div>
    </div>
  )
}

export default Companies