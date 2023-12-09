import React from 'react'
import Picture from '../pictures/Picture'
import MinimalCard from '../cards/MinimalCard'
import FooterLinks from '../footer/FooterLinks'
import SmallForm from '../form/SmallForm'
import styles from './Footer.module.scss'
import { useSelector } from 'react-redux'

const Footer = () => {
    const data = useSelector(state=>state.photos)
  return (
    <footer >
        <div className={styles.footerContainer}>
             <div className={styles.footer}>
              <div style={{display:'flex',flexDirection:'column',marginRight:'30px',alignItems:'end',marginTop:'10px'}}>
                    <Picture src={'/images/digikalaFarsiLogo.svg'} href={'./'}/>
                <p>تلفن پشتیبانی ۶۱۹۳۰۰۰۰ - ۰۲۱
                            |
                    ۷روز هفته، ۲۴ ساعته پاسخگوی شما هستیم

                </p>
              </div>
            
                <MinimalCard data={data.digikalaAdvantage} cardContainer={styles.footerCardContainer}/>

                <div className={styles.footerLinksContainer}>

                <FooterLinks/>

                <SmallForm name='email' type='text' buttonValue='ثبت' fieldStyle={styles.fieldStyle}/>
                </div>

        

               <div>
               
               </div>
              
             </div>
        </div>
      </footer>
    
  )
}

export default Footer