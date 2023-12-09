import React, { useEffect, useState } from 'react'
import style from './Menu.module.scss'
import {menuItem} from '../NavData'
import Link from 'next/link'
import MenuDropdown from '../subMenu/MenuDropdown'
const Menu = (props) => {
  
    const [dropdown, setDropdown] = useState(false);    

    const mouseHandler =(e)=>{
      
        switch (e.target.id) {
            case "1":
                return setDropdown(true);
             default:
                return setDropdown(false);
             
                  } }
 
    //    useEffect(() => {
    //    props.func(dropdown)    
    //     },[mouseHandler])

  return (
   
    <div className={style.navbar}>
        <ul onMouseLeave={()=>{setDropdown(false)}}>
            {menuItem.map((item) => {
             
                    return(
                        <li key={item.id}  > 
                    
                       <span className={style.icon}>{item.iconName}</span>
                        <Link href='./'>  
                      
                            <a id={item.id} className={style.link} onMouseEnter={mouseHandler}> 
                                  
                                 {item.title}

                            </a>
                        </Link>
                              
                     </li>

                    )
            })}
        {dropdown &&  <MenuDropdown/>}
        </ul>
           
    </div>
    
  )
}

export default Menu