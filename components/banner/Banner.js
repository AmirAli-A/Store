import React from 'react'
import LinkButton from '../button/LinkButton'
import NormalButton from '../button/NormalButton'
import Picture from '../pictures/Picture'
const Banner = (props) => {
  return (
    <div className={props.bannerContainerClassname}>
        {
            props.data.map((item) => {
                return (
                    <>
                     <Picture src={item.src} href={item.href} className={item.pictureClassName}/>
                     <p>{item.bannerText}</p>
                     <LinkButton href={item.href} linkClassname={item.linkClassname} value={item.linkValue}/>
                    </>
                   
                )
            })
        }
       
    </div>
  )
}

export default Banner