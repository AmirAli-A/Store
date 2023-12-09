import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardsStyle from './AmazingOffersCards.module.scss';
import Picture from '../pictures/Picture';
import { useDispatch } from 'react-redux';
import Link from 'next/link';
import { getProductInfo } from '../../redux/actions/ProductAction';
import { useRouter } from 'next/router';

const ConvertToArabicNumbers = (num) => {
  const arabicNumbers = '\u0660\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669';
 return new String(num).replace(/[0123456789]/g, (d)=>{return arabicNumbers[d]});
}
const num = 345;

const AmazingOffersCards = (props) => {

  const router = useRouter()
  const dispatch = useDispatch()

 const clickHandler =(e)=> {
   
   const productInfo = props.info;
   dispatch(getProductInfo(productInfo))
  //  router.push('/product')



 }

  return (
    
 
    
     <div className= {CardsStyle.singleCardContainer}>
          
          <Card className={CardsStyle.card}>

           <CardContent>
     
        <Picture onClick={clickHandler} id={props.info.id}   src={props.info.cardImage} className={CardsStyle.picture} href={'/product'} />
       
       <div className={CardsStyle.priceContainer}>
     
     
       <span className={CardsStyle.price} >{props.info.price_after.toLocaleString('en-US')}  </span>
       <span className={CardsStyle.offPrice}>{props.info.off_percent.toLocaleString('en-US')}</span> 
        
     
        
       </div>
      
       <span className={CardsStyle.lastPrice}>{props.info.price_before.toLocaleString('en-US')}</span>

              </CardContent>

              </Card>
       
</div> 

   
    
   
  )
}

export default AmazingOffersCards