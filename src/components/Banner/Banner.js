import React from 'react'
import { images } from '../../config/images'
import './Banner.scss'

const Banner = () => {
  return (
    <div className='banner'>
      <img src={images.header} alt="banner" />
    </div>
  )
}

export default Banner