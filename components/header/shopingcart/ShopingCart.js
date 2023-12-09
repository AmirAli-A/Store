import React from 'react'
import {GrCart} from 'react-icons/gr'
import Link from 'next/link'
import style from './ShopingCart.module.scss'

const ShopingCart = (props) => {
  return (
    <Link href='/shoppingCart'>
    <a>
        <GrCart size={'1.5em'}/>
        {props.cartCounter === 0 ? null : (
          <span className={style.cartBadge}>
            {props.cartCounter > 99 ? +99 : props.cartCounter}
          </span>
        )}
    </a>
    </Link>
  )
}

export default ShopingCart