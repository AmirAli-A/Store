import React from 'react'
import Picture from '../pictures/Picture';
import style from './MinimalCard.module.scss'
import LinkButton from '../button/LinkButton';
const MinimalCard = (props) => {

  return (

   <div className={props.cardContainer}>
        {
          props.data.map((item) => {
                return(
             
                    <div className={props.pictureDivider} key={item.id}>
                    <Picture src={item.imageSrc} href={item.href} className={props.classname}/>
                    <LinkButton href={item.href} value={item.tag} linkClassname={style.linkButton} />
               
                    </div>
                )
            })
        }
    
    </div>
  )
}

export default MinimalCard