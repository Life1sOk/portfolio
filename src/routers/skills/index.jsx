import React from "react";

import { MainSkills } from "./index.style";

import LeftBlock from "./blocks/left-block/left-block";
import RightBlock from "./blocks/right-block/right-block";

const Skills = () => {
    return (
        <MainSkills>
            <LeftBlock />
            <RightBlock />
        </MainSkills>
    );
}

export default Skills;