import React from "react";

import Title from "../../ui/title/title.component";

import SkillSetContainer from "../../containers/skill-set/skill-set.container";
import BoxBig from "../../containers/box-big/box-big.component";

import { MainWrapper, MainSkills, TitleWrapper } from "./index.style";

const Skills = () => {
    return (
        <MainWrapper>
            <TitleWrapper>
                <Title number={2} isReverse>Tools i use</Title>
            </TitleWrapper>
            <MainSkills>
                <BoxBig />
                <SkillSetContainer />
            </MainSkills>
        </MainWrapper>
    );
}

export default Skills;