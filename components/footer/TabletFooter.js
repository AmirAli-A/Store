import React from 'react'
import { tabletData } from './TabletFooterData'
import style from './TabletFooter.module.scss'
const TabletFooter = () => {
  return (
    <div>
          <div className={style.tabletFooter}>
            {
                tabletData.map((data, index ) => {
                    return (
                        <div key={index}>
                        <span>{data.iconeName}</span>
                        <a>{data.name}</a>
                        </div>
                        
                    )
                })
            }
           </div>
    </div>
  )
}

export default TabletFooter