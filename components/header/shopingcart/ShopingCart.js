import React from "react";
import { GrCart } from "react-icons/gr";
import Link from "next/link";
import style from "./ShopingCart.module.scss";
import { useSelector } from "react-redux";

const ShopingCart = () => {
  const cart = useSelector((state) => state.shoppingCart);
  let count = [];
  for (let i = 0; i < cart.length; i++) {
    const n = cart[i].productQuantity;
    count.push(n);
  }

  let totalCount = 0;

  for (let i = 0; i < count.length; i++) {
    totalCount += count[i];
  }
  return (
    <Link href="/shoppingCart">
      <a className={style.cartLink}>
        <GrCart size={"1.5em"} />
        {totalCount === 0 ? null : (
          <span className={style.cartBadge}>
            {totalCount > 99 ? +99 : totalCount}
          </span>
        )}
      </a>
    </Link>
  );
};

export default ShopingCart;
