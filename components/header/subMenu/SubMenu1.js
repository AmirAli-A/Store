import Link from 'next/link'
import React from 'react'
import { serviceDropdown } from '../NavData'
import style from './SubMenu1.module.scss'


export const MyContext = React.createContext()

const SubMenu1 = (props) => {

 
const mouseHandler =(e)=>{

  const linkId = e.target.id

  props.dataFunc(linkId)
     
  }

  return (

    <div className={style.subMenu1Container}>
    
      <ul>
        {serviceDropdown.map((item) => {
          return (<li key={item.id}>
              <Link href='./'  >
                   
                <a onMouseEnter={mouseHandler}  id={item.id} className={style.serviceLinks} key={item.id}>
                  {item.title}
                </a>

              </Link>
          </li>
          )
        })}
          
      </ul>

    </div>   
     
  )

}
export default SubMenu1