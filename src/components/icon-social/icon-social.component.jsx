import React from "react";

import { IconSocialStyle } from "./icon-social.style";

const IconSocial = ({ url, icon, size, type }) => {
  return (
    <IconSocialStyle
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      size={size}
      type={type}
    >
      {icon}
    </IconSocialStyle>
  );
};

export default IconSocial;
