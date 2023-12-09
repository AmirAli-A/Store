import React from 'react'
import ImageGallery from 'react-image-gallery';
import {firstSliderInfo} from '../SliderData'
import style from './Slider.module.scss'
const Slider = () => {
  return (
  <div className={style.imageGalleryContainer}>


    <ImageGallery
    key= {firstSliderInfo.id}
    id = {firstSliderInfo.id}
    items={firstSliderInfo}
    
    autoPlay = {true}
    showPlayButton = {false}
    showThumbnails = {false}
    thumbnailPosition = 'top' 
    showBullets = {true}
    showFullscreenButton = {false}
    slideInterval = {3000}
    isRTL = {true}
    />

  </div>


    
   
  )
}

export default Slider