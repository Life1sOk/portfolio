import React from "react";

import { TbWorld } from "react-icons/tb";

import { LogoStyle, WorldGlobus, Name, Line } from "./logo.style";

const Logo = () => {
  return (
    <LogoStyle>
      <WorldGlobus>
        <TbWorld />
      </WorldGlobus>
      <Line />
      <Name>ANDREY</Name>
    </LogoStyle>
  );
};

export default Logo;
