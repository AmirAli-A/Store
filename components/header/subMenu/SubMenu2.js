import Link from 'next/link'
import React, {useContext} from 'react'
import { subMenu2Data } from '../NavData'
import { DropdownContext } from './MenuDropdown'
import style from './SubMenu2.module.scss'
import { v4 as uuid } from 'uuid'




const Submenu2 = () => {
  

       const contextValue = useContext(DropdownContext)

       const filterSubmenu = subMenu2Data.filter((item) => {
        return item.id == contextValue
       }
       )
      
  return (
    <div className={style.submenu2Container}>
      <ul>


     {
        filterSubmenu.map((item) => {
          return (
          <li key={uuid()}>
            <Link href='./' >
              <a className={style.mainLinks} >
                {item.title}
              </a>
            </Link>
            

            <Link href='./' >
              <a className={style.standardLinks}>
                {item.titleItem}
              </a>
            </Link>

           
           
          </li>
          
          )
        })
       }


      </ul>
  
      
    </div>

    
  )
}

export default Submenu2