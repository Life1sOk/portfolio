import React from "react";

import { TbWorld } from "react-icons/tb";

import { LogoStyle, WorldGlobus, Name } from "./logo.style";

const Logo = () => {
  return (
    <LogoStyle>
      <WorldGlobus>
        <TbWorld />
      </WorldGlobus>
      <Name>ANDREY</Name>
    </LogoStyle>
  );
};

export default Logo;
