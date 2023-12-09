import Link from 'next/link'
import React from 'react'

const LinkButton = (props) => {
  return (
    
        <Link href={props.href}>
          <a className={props.linkClassname}>
            {props.value}
          </a>
        </Link>
   
  )
}

export default LinkButton