import React from "react";

import { IconSocialStyle } from "./index.style";

interface IComponent {
  url: string;
  icon: any;
  size?: string;
  type?: string;
  sm: string;
}

const IconSocial = ({ url, icon, size, type, sm }: IComponent) => {
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
