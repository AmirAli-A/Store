import React, { useState } from 'react'
import Styles from './SearchBox.module.scss'
import {BiSearch} from 'react-icons/bi'
const SearchBox = () => {
  const [searchText, setSearchText] = useState("");
  const changeHandler =(e)=>{
         setSearchText(e.target.value)
  }
  
  return (
   <>
     <BiSearch className={Styles.icon}/>
   <input
    id='searchBox'
    type={'text'}
    placeholder='   جستجو          '  
    value={searchText}
    onChange={changeHandler}
    className={Styles.input}/>
  
   </>
  )
}

export default SearchBox