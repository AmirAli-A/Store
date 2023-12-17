import React, { useState } from "react";
import { useDispatch } from "react-redux";
import style from "./ProductImageSlider.module.scss";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { showDisplay } from "../../redux/actions/ProductAction";
import Image from "next/image";

const ProductImageSlider = (props) => {
  const dispatch = useDispatch();
  const pics = props.images;
  const [value, setValue] = useState(0);
  const mainImage = pics.productPageImage.allImage[value];
  return (
    <div key={pics.index} className={style.productSlider_right}>
      <div className={style.mainImageContainer}>
        <Image alt="product image" src={mainImage} />
      </div>
      -
      <div className={style.thumbnails}>
        <ul>
          {pics.productPageImage.allImage.map((thumbnails, index) => {
            return (
              <li key={index}>
                <Image
                  alt="product image"
                  src={thumbnails}
                  onClick={() => {
                    setValue(index);
                  }}
                  key={index}
                />
              </li>
            );
          })}

          {pics.productPageImage.lastImage.map((lastImg, index) => {
            return (
              <li key={index}>
                <BiDotsHorizontalRounded className={style.allImageIcon} />
                <Image
                  alt="product image"
                  src={lastImg}
                  className={style.lastImg}
                  onClick={() => {
                    dispatch(showDisplay(true));
                  }}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ProductImageSlider;
