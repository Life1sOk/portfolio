import React from "react";

import { tierOne, tierTwo, tierThree } from "../../utils/tools-icons";

import Icon from "../../components/icon-wrap/icon-wrap.component";

import { SkillSetStyle, BasicsContainer, FrameworksContainer } from "./skill-set.style";

const SkillSetContainer = () => {
  return (
    <SkillSetStyle>
      <BasicsContainer>
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
      </BasicsContainer>
    </SkillSetStyle>
  );
};

export default SkillSetContainer;
