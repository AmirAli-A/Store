import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {responsive} from '../ProductData'
import StandardCard from '../cards/StandardCard';
import { useDispatch, useSelector } from 'react-redux';
import { brandCarousel } from '../../redux/actions/PhotosAction';

const NormalCarousel = (props) => {
  const pictures = useSelector(state=>state.photos.brandCarousel)

  return (
    <div className={props.carouselContainer}>
        <h2>{props.header}</h2>
        <Carousel responsive={responsive}
        rtl={true}
        
        >
         
        {
           pictures.map((item) => {
                return(
                   

                          <StandardCard key={item.id} src={item.src}
                           href={item.href} value={item.tag}
                           PictureClassName={props.PictureClassName}
                           linkButtonClassName={props.linkButtonClassName}/>
                  
                   
                    
                )
            })
        }


        </Carousel>
       
    </div>
  )
}

export default NormalCarousel