import React from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "./ProductPage.module.scss";
import { FaStoreAlt } from "react-icons/fa";
import { BsShieldCheck, BsClipboardCheck } from "react-icons/bs";
import { VscTrash } from "react-icons/vsc";
import ProductSecondImageDisplay from "../../components/productpage/ProductSecondImageDisplay";
import ProductImageSlider from "../../components/productpage/ProductImageSlider";
import LinkButton from "../../components/button/LinkButton";
import {
  addToCart,
  addToQuantity,
  decreaseQuantity,
  deleteProductFromCart,
} from "../../redux/actions/ShoppingCartAction";
import AddToCartButton from "../../components/button/AddToCartButton";

const Index = () => {
  const product = useSelector((state) => state.product.productDetail);
  const shoppingCart = useSelector((state) => state.shoppingCart);
  const availableProduct = shoppingCart.find(
    (item) => item.id === product[0].id
  );
  let productCount = 0;
  if (availableProduct) {
    productCount = availableProduct.productQuantity;
  }

  const displayStatus = useSelector((state) => state.product.displayOn);
  const dispatch = useDispatch();

  const clickHandler = () => {
    dispatch(addToCart(product[0], product[0].id));
  };

  const addProductQuantity = () => {
    dispatch(addToQuantity(product[0].id, productCount));
  };
  const decProductQuantity = () => {
    dispatch(decreaseQuantity(product[0].id));
  };
  const deleteProduct = () => {
    dispatch(deleteProductFromCart(product[0].id));
  };
  return (
    <div>
      {product.map((productInformation, index) => {
        return (
          <div key={index}>
            <div className={style.mainContainer}>
              <ProductImageSlider images={productInformation} />

              {displayStatus && (
                <ProductSecondImageDisplay images={productInformation} />
              )}

              <div className={style.attributesContainer}>
                <h2>{productInformation.title}</h2>
                <div className={style.attributes}>
                  <h3>ویژگی ها</h3>
                  {productInformation.attributes.map((attributeInfo, index) => {
                    return (
                      <table key={index}>
                        <tbody>
                          <tr>
                            <td>{attributeInfo.title} :</td>
                            <td> {attributeInfo.info} </td>
                          </tr>
                        </tbody>
                      </table>
                    );
                  })}
                </div>
              </div>
              <div className={style.sellerAndPriceContainer}>
                <h2>فروشنده</h2>
                <div>
                  <FaStoreAlt className={style.storeIcon} />
                  <span className={style.storeName}>
                    {productInformation.sellerName}
                  </span>
                </div>
                <div>
                  <BsShieldCheck className={style.guaranteeIcon} />
                  <p className={style.guaranteeInfoText}>
                    {productInformation.guaranteeInfo}
                  </p>
                </div>
                <div>
                  <>
                    <BsClipboardCheck className={style.checkIcon} />
                    <span className={style.checkText}>
                      موجود در انبار فروشنده
                    </span>
                  </>
                </div>
                <div className={style.priceInfoContainer}>
                  <span>قیمت فروشنده :</span>
                  <span>
                    {productInformation.price_after.toLocaleString("en-US")}{" "}
                    تومان
                  </span>
                </div>

                {productCount > 0 ? (
                  <div style={{ justifyContent: "space-evenly" }}>
                    <div className={style.incOrDecButtonSection}>
                      <button
                        className={style.incOrDecButton}
                        onClick={addProductQuantity}
                      >
                        +
                      </button>
                      <span>{productCount}</span>
                      {productCount === 1 ? (
                        <VscTrash
                          className={style.incOrDecButton}
                          onClick={deleteProduct}
                        />
                      ) : null}{" "}
                      {productCount > 1 ? (
                        <button
                          className={style.incOrDecButton}
                          onClick={decProductQuantity}
                        >
                          -
                        </button>
                      ) : null}
                    </div>

                    <div className={style.btnText}>
                      <span>در سبد شما مشاهده در</span>
                      <LinkButton
                        href="/shoppingCart"
                        value="سبد خرید"
                        linkClassname={style.navBtn}
                      />
                    </div>
                  </div>
                ) : (
                  <AddToCartButton
                    className={style.addToCartButton}
                    func={clickHandler}
                    value={"افزودن به سبد"}
                  />
                )}
              </div>
            </div>
            <div></div>
            <div className={style.descriptionContainer}>
              <h2>توضیحات</h2>
              <p>{productInformation.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Index;
