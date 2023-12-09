import React from 'react'
import { justForTest } from '../../public/data/FooterTestData'
import style from './FooterLinks.module.scss'
import LinkButton from '../button/LinkButton';


const FooterLinks = () => {
  const uls = justForTest.reduce((pre, curr) => {
    const useFor = curr.useFor;
    if (!pre[useFor]) {
      pre[useFor] = true;
    }
    return pre;
  }, {});
  


  return (
    <div className={style.container}>
      {Object.keys(uls).map((x , i) => <ul key={i}>

        {justForTest.filter(y => y.useFor == x).map((z, i) =>{ 
          return (
            <div key={x+i}>
            <li className={style.linksTag}>{z.tag}</li>
             <li ><LinkButton  href='/'  value={z.link} linkClassname={style.linkButton}/></li>
            </div>
         
          ) 
          })}
      </ul>)}

      

    </div>
  )
}
export default FooterLinks