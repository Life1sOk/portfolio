import React from "react";

import SkillSetContainer from "../../containers/skill-set/skill-set.container";
import BoxBig from "../../containers/box-big/box-big.component";

import { MainSkills } from "./index.style";

const Skills = () => {
    return (
        <MainSkills>
            <BoxBig />
            <SkillSetContainer />
        </MainSkills>
    );
}

export default Skills;