import React, { useState } from "react";
import style from "./ProductSecondImageDisplay.module.scss";
import { IoClose } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { showDisplay } from "../../redux/actions/ProductAction";
import Image from "next/image";

const ProductSecondImageDisplay = (props) => {
  const dispatch = useDispatch();
  const [value, setValue] = useState(0);
  const pics = props.images;
  const mainImage = pics.productPageImage.allImage[value];
  return (
    <div className={style.allImageContainer}>
      <div className={style.topContainer}>
        <IoClose
          onClick={() => {
            dispatch(showDisplay(false));
          }}
        />
        <button>تصاویر رسمی</button>
      </div>
      <div className={style.imagePart}>
        <div className={style.mainImageContainer}>
          <Image src={mainImage} />
        </div>
        <div className={style.thumbnailConatiner}>
          <ul>
            {pics.productPageImage.imageGallery.map((thumbnails, index) => {
              return (
                <li key={index}>
                  <Image
                    alt="thumbnails"
                    src={thumbnails}
                    onClick={() => {
                      setValue(index);
                    }}
                  />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductSecondImageDisplay;
