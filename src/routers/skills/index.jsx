import React from "react";

import { MainSkills } from "./index.style";

import LeftBlock from "./blocks/left-block/left-block";
import RightBlock from "./blocks/right-block/right-block";

const Skills = () => {
    return (
        <MainSkills>
            <RightBlock />
            <LeftBlock />
        </MainSkills>
    );
}

export default Skills;