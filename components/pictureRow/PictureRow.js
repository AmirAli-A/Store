import React from 'react'
import Picture from '../pictures/Picture'
import { useSelector } from 'react-redux'

const PictureRow = (props) => {
  const pictures = useSelector(state=>state.photos.firstPictureRow)
  return (
    <div style={{display:'flex'}}>

          {
            pictures.map((item) => {
              return(
                <Picture src={item.src} key={item.id}
                 href={item.href} className={props.pictureClassname} mainContainerClassname={props.pictureRowContainer}/>
              )
            })
          }

        </div>
  )
}

export default PictureRow