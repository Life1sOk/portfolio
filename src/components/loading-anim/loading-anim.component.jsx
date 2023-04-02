import React from "react";

import Logo from "../logo/logo.component";

import { LoadingAnimStyle, LogoWrapper } from "./loading-anim.style";

const LoadingAnim = () => {
  return (
    <LoadingAnimStyle>
      <LogoWrapper>
        <Logo />
      </LogoWrapper>
    </LoadingAnimStyle>
  );
};

export default LoadingAnim;
