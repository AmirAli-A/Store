import React from 'react'
import {GrCart} from 'react-icons/gr'
import Link from 'next/link'
import style from './ShopingCart.module.scss'
import { useSelector } from 'react-redux'

const ShopingCart = () => {
  const cart = useSelector(state=>state.shoppingCart)
  const cartAmount = cart.length
  return (
    <Link href='/shoppingCart'>
    <a className={style.cartLink}>
        <GrCart size={'1.5em'}/>
        {cartAmount === 0 ? null : (
          <span className={style.cartBadge}>
            {cartAmount > 99 ? +99 : cartAmount}
          </span>
        )}
    </a>
    </Link>
  )
}

export default ShopingCart