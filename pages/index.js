import Head from 'next/head'
import styles from './index.module.scss'
import { useEffect, useState } from 'react';
import Slider from '../components/slider/Slider';
import AmazingOffersCarousel from '../components/carousel/AmazingOffersCarousel';
import PictureRow from '../components/pictureRow/PictureRow';
import MinimalCard from '../components/cards/MinimalCard';
import NormalCarousel from '../components/carousel/NormalCarousel';
import { useSelector } from 'react-redux';
import Ninja from '../components/test/ninja';


export default function Home({homePageData}) {
  // const [change, setChange] = useState()
  

  
//  const opocityHandler =(result)=> {
//       setChange(result)
     
//  }
  //style={{backgroundColor: change ? '#85849c' : 'white'}}
  const data = useSelector(state=>state.photos)

  return (
    <>
      <Head>
        <title>صفحه اصلی</title>
        <meta name="description" content="فروشگاه اینترنتی دیجیکالا" />    
      </Head>

    
       <main className={styles.mainContainer} >
        <Ninja/>
        {/* {homePageData.map((data) => {
          return (
            <h4>{data.name}</h4>
          )
        })} */}
        {/* <div className= {`${styles.main}`} >
          
          <Slider/>
          
          <div className={`${styles.carouselDivider}`}>
          <AmazingOffersCarousel/>
          </div>
       
           <PictureRow  pictureRowContainer={styles.pictureRowContainer}
            pictureClassname={styles.pictureRow}/>
           
           <h2>دسته بندی دیجیکالا</h2>
           <MinimalCard  data={data.digikalaCategoryData} classname={styles.categoryCardStyle} 
           pictureDivider={styles.categoryPictureDivider} cardContainer={styles.mainPageCardContainer}/>

           <h2>پیشنهاد دیجیکالا</h2>
           <MinimalCard data={data.digikalaSuggestion} classname={styles.suggestionCardStyle}
            pictureDivider={styles.suggestPictureDivider} cardContainer={styles.mainPageCardContainer}/>

           <NormalCarousel  header='محبوب ترین برندها' 
           carouselContainer={styles.normalCarouselContainer} PictureClassName={styles.brandPicture}/>

           
        </div>
        */}
         
      
       </main>


    </>

  );
};
