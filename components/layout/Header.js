import React from 'react'
import ShopingCart from '../header/shopingcart/ShopingCart'
import LoginButton from '../header/loginbutton/LoginButton'
import SearchBox from '../header/searchbox/SearchBox'
import Logo from '../header/logo/Logo'
import LocationButton from '../locationButton/LocationButton'
import styles from './Header.module.scss';
import Menu from '../header/menu/Menu'
import { useSelector } from 'react-redux'
const Header = () => {
   
  return (
    <header className={styles.headerContainer} >
      
     

    <div className={styles.Header}>
    <div className={styles.fixedHeaderContainer}>
     <div className={styles.headerItems}>

     <div className={styles.LeftItem}>
       <ShopingCart/>
       <LoginButton/>

     </div>

     <div className={styles.rightItem}>
               <SearchBox/>
               <Logo/>
     </div>
 
    
     </div>
      <div className={styles.menuItem}>
       
         <Menu/>
         <LocationButton/>
      
     
     </div>
      
    
   </div>
  
</div>
  
</header>
  )
}

export default Header