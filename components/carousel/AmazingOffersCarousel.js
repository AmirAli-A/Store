import React from 'react';
import AmazingOffersCards from '../cards/AmazingOffersCards';
import SliderStyle from './AmazingOffers.module.scss'
import { responsive } from '../ProductData'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Link from 'next/link';
import Picture from '../pictures/Picture';
import { useSelector } from 'react-redux';

const AmazingOffersCarousel = () => {

  const products = useSelector(state => state.product.amazingOffersProducts)
  
 

  return (
    <div className={SliderStyle.carouselBackground}>

       <div className={SliderStyle.amazingOffersLeftItems}>
        <Carousel responsive={responsive}
          rtl={true}
        >
          {products.map((item) => {

            return (<AmazingOffersCards info={item} key={item.id} />

            )

          })}



        </Carousel>

      </div> 


      <div className={SliderStyle.amazingOffersRightItems}>
        <Picture src={'images/amazingsOffersText.svg'} className={SliderStyle.amazingOffersText} href={'./'} />
        <Picture src={'images/amazingOffersBox.png'} className={SliderStyle.amazingOffersBoxImg} href={'./'} />

        <Link href='./'>
          <a className={SliderStyle.amazingOffersLink}>
            مشاهده همه
          </a>
        </Link>
      </div>


    </div>

  )
}

// Don't forget to include the css in your page

// Using webpack or parcel with a style loader
// import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

// Using html tag:
// <link rel="stylesheet" href="<NODE_MODULES_FOLDER>/react-responsive-carousel/lib/styles/carousel.min.css"/>
export default AmazingOffersCarousel