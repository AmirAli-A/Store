import Image from "next/image";
import Link from "next/link";
import React from "react";

const Picture = (props) => {
  return (
    <div className={props.mainContainerClassname}>
      <Link href={props.href}>
        <img
          src={props.src}
          className={props.className}
          alt={props.alt}
          id={props.id}
          onClick={props.onClick}
        />
      </Link>
    </div>
  );
};

export default Picture;
