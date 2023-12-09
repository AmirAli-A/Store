import React, { useState } from 'react'
import SubMenu1 from './SubMenu1'
import Submenu2 from './SubMenu2'
import style from './MenuDropdown.module.scss'



export const DropdownContext = React.createContext();
export const MenuDropdown = () => {


  const [newData, setNewData] = useState(1)
  

    const dataHandler =(d)=> {
      setNewData(d)
       
    }
  
  return (

    <div className={style.subMenuContainer}>
         
         <DropdownContext.Provider value={newData} >
            
              <SubMenu1 dataFunc={dataHandler}/>
      
              <Submenu2 />

              
         </DropdownContext.Provider>
         
   
    </div>
  )
}

export default MenuDropdown