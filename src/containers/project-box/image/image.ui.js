import React from "react";

import { ImageUiStyle, ImageCurrent, ImageFront } from "./image.ui.style";

const ImageUi = ({ screen, title, isLeftSide }) => {
  return (
    <ImageUiStyle isLeftSide={isLeftSide}>
      <ImageCurrent src={screen} alt={title} />
      <ImageFront />
    </ImageUiStyle>
  );
};

export default ImageUi;
