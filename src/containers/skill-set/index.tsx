import React from "react";

import { tierOne, tierTwo, tierThree } from "./consts";

import Icon from "./ui/icon-wrap";

import { SkillSetStyle, BasicsContainer, FrameworksContainer } from "./index.style";

const SkillSet = () => {
  return (
    <SkillSetStyle>
      {/* <BasicsContainer>
        {tierOne.map((tool, index) => (
          <Icon name={tool.name} icon={tool.icon} key={index} />
        ))}
      </BasicsContainer>
      <FrameworksContainer>
        {tierTwo.map((tool, index) => (
          <Icon name={tool.name} icon={tool.icon} key={index} />
        ))}
      </FrameworksContainer>
      <BasicsContainer>
        {tierThree.map((tool, index) => (
          <Icon name={tool.name} icon={tool.icon} key={index} />
        ))}
      </BasicsContainer> */}
    </SkillSetStyle>
  );
};

export default SkillSet;
