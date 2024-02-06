import React from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "./ShoppingCartPage.module.scss";
import {
  addToQuantity,
  decreaseQuantity,
  deleteProductFromCart,
} from "../../redux/actions/ShoppingCartAction";
import { VscTrash } from "react-icons/vsc";
import Image from "next/image";

const Index = () => {
  const cart = useSelector((state) => state.shoppingCart);

  const dispatch = useDispatch();
  let Prices = [];
  for (let i = 0; i < cart.length; i++) {
    const n = cart[i].productPriceInCart;
    console.log("this is N:", n);
    Prices.push(n);
  }
  console.log("this is prices array : :", Prices);
  let totalPrice = 0;

  for (let i = 0; i < Prices.length; i++) {
    totalPrice += Prices[i];
  }
  console.log("this is total price :", totalPrice);

  return (
    <>
      <div className={style.pageContainer}>
        <div className={style.mainContainer}>
          {cart.map((productInfo, index) => {
            return (
              <div className={style.shoppingCartConatiner} key={index}>
                <div className={style.productConatiner}>
                  <div>
                    <img
                      alt="image"
                      src={productInfo.cardImage}
                      width="150px"
                    />
                  </div>
                  <div>
                    <h3>{productInfo.title}</h3>
                    <p>{productInfo.guaranteeInfo}</p>
                    <p>{productInfo.sellerName}</p>
                    <p>موجد در انبار فروشنده و فروشگاه</p>
                  </div>
                </div>

                <div style={{ display: "flex", alignItems: "center" }}>
                  {productInfo.productQuantity > 0 ? (
                    <div className={style.incOrDecButtonSection}>
                      <button
                        className={style.incOrDecButton}
                        onClick={() => {
                          dispatch(addToQuantity(productInfo.id));
                        }}
                      >
                        +
                      </button>

                      <span>{productInfo.productQuantity}</span>
                      {productInfo.productQuantity === 1 ? (
                        <VscTrash
                          className={style.incOrDecButton}
                          onClick={() => {
                            dispatch(deleteProductFromCart(productInfo.id));
                          }}
                        />
                      ) : null}
                      {productInfo.productQuantity > 1 ? (
                        <button
                          className={style.incOrDecButton}
                          onClick={() => {
                            dispatch(decreaseQuantity(productInfo.id));
                          }}
                        >
                          -
                        </button>
                      ) : null}
                    </div>
                  ) : null}

                  <div style={{ marginRight: "24px" }}>
                    <h2>
                      تومان{" "}
                      {productInfo.productPriceInCart.toLocaleString("en-US")}
                    </h2>
                  </div>
                  <div></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className={style.purchesContainer}>
        <h3>{cart.length} :تعداد محصولات انتخاب شده</h3>
        <h3> {totalPrice.toLocaleString("en-US")} جمع سبد خرید </h3>
        <button>تکمیل خرید</button>
      </div>
    </>
  );
};

export default Index;
