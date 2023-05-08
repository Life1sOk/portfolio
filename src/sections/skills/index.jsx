import React, { forwardRef, memo } from "react";
import { useTranslation } from "react-i18next";

import Title from "../../components/title/title.component";

import SkillSetContainer from "../../containers/skill-set/skill-set.container";
import BoxBig from "../../containers/box-big/box-big.component";

import AnimationView from "../../routers/layouts/animation/animation-wrapper";

import { MainWrapper, MainSkills, TitleWrapper, BoxWrapper } from "./index.style";

const Skills = memo(
  forwardRef((_, ref) => {
    const { t } = useTranslation();

    return (
      <MainWrapper ref={ref}>
        <AnimationView>
          <BoxWrapper>
            <BoxBig />
          </BoxWrapper>
        </AnimationView>
        <AnimationView>
          <MainSkills>
            <TitleWrapper>
              <Title number={2} isReverse>
                {t("tools.title")}
              </Title>
            </TitleWrapper>
            <SkillSetContainer />
          </MainSkills>
        </AnimationView>
      </MainWrapper>
    );
  })
);

export default Skills;
