import React, { forwardRef, memo } from "react";
import { useTranslation } from "react-i18next";

import Title from "../../components/title/title.component";

import SkillSetContainer from "../../containers/skill-set/skill-set.container";
import BoxBig from "../../containers/box-big/box-big.component";

import {
  MainWrapper,
  MainSkills,
  TitleWrapper,
  BoxWrapper,
} from "./index.style";

const Skills = memo(
  forwardRef((_, ref) => {
    const { t } = useTranslation();

    return (
      <MainWrapper ref={ref}>
        <BoxWrapper>
          <BoxBig />
        </BoxWrapper>
        <MainSkills>
          <TitleWrapper>
            <Title number={2} isReverse>
              {t("tools.title")}
            </Title>
          </TitleWrapper>
          <SkillSetContainer />
        </MainSkills>
      </MainWrapper>
    );
  })
);

export default Skills;
