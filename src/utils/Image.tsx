import React, { FC } from "react";
import { ImageSrc, ImageAltText } from "./ImageType";

const Image: FC<{ imgSrc: ImageSrc; altText: ImageAltText }> = ({
  imgSrc,
  altText,
}) => {
  return <img src={imgSrc} alt={altText} />;
};

export default Image;
