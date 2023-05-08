import React from "react";

import { IconWrapContainer, IconWrap, NameFont } from "./icon-wrap.style";

const Icon = ({ icon, name }) => {
  return (
    <IconWrapContainer>
      <IconWrap>{icon}</IconWrap>
      <NameFont>{name}</NameFont>
    </IconWrapContainer>
  );
};

export default Icon;
