import React from "react";

import { tierFront, tierBack } from "./consts";

import Icon from "./ui/icon-wrap";

import { SkillSetStyle, BasicsContainer } from "./index.style";

const SkillSet = () => {
  return (
    <>
      <BasicsContainer>
        {tierFront.map((tool, index) => (
          <Icon name={tool.name} icon={tool.icon} key={index} />
        ))}
      </BasicsContainer>
      <BasicsContainer>
        {tierBack.map((tool, index) => (
          <Icon name={tool.name} icon={tool.icon} key={index} />
        ))}
      </BasicsContainer>
    </>
  );
};

export default SkillSet;
