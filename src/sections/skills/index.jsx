import React, { forwardRef } from "react";

import Title from "../../components/title/title.component";

import SkillSetContainer from "../../containers/skill-set/skill-set.container";
import BoxBig from "../../containers/box-big/box-big.component";

import { MainWrapper, MainSkills, TitleWrapper, BoxWrapper } from "./index.style";

const Skills = forwardRef((_, ref) => {
    return (
        <MainWrapper ref={ref}>
            <BoxWrapper>
                <BoxBig />
            </BoxWrapper>
            <MainSkills>
                <TitleWrapper>
                    <Title number={2} isReverse>Tools i use</Title>
                </TitleWrapper>
                <SkillSetContainer />
            </MainSkills>
        </MainWrapper>
    );
});

export default Skills;