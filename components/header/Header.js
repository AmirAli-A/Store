import React from 'react'
import Logo from './digikalaLogo.svg'
import Grid from '@mui/material/Grid'
import SearchIcon from '@mui/icons-material/Search';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import HeaderStyle from './Header.module.css'
const Header = () => {
  return (
  
    
      <Grid container dir='rtl' justifyContent={'center'} spacing={1} >
        <Grid item xs={1} >
          <img src={Logo}/>
        
        </Grid>
        <Grid item xs={6}>
       
               <input placeholder='            جستجو'/>
      
          <SearchIcon className={HeaderStyle.searchIcon}/>
        </Grid>
        <Grid item xs={4} position='relative'>
       
          <a className={HeaderStyle.loginLink}>ورود | ثبت نام</a>
            <ExitToAppIcon className={HeaderStyle.exitIcon}/>
     
             
         
          {/* <Divider orientation='vertical'/> */}
        </Grid>
    </Grid>
    
    
   
  
  )
}

export default Header