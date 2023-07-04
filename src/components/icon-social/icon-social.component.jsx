import React from "react";

import { IconSocialStyle } from "./icon-social.style";

const IconSocial = ({ url, icon, size, type, sm }) => {
  return (
    <IconSocialStyle
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      size={size}
      type={type}
      title={sm}
    >
      {icon}
    </IconSocialStyle>
  );
};

export default IconSocial;
