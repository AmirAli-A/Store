import React from 'react'
import Style from  './LocationButton.module.scss'
import {HiOutlineLocationMarker} from 'react-icons/hi'
const LocationButton = () => {
  return (
    <div className={Style.btnContainer}>
      <HiOutlineLocationMarker className={Style.icon}/>
    <a className={Style.LocationButton} >لطفا شهر خود را انتخاب کنید</a>
    
    </div>
  )
}

export default LocationButton