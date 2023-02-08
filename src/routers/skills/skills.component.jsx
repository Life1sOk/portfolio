import React from "react";

import { basicLevel, nextLevel } from "../../utils/icons.skills";
import { SkillsContainer, Title, MainSkills, Basics, Advanced } from './skills.style';
import Icon from "../../components/icon-wrap/icon-wrap.component";

import Box from "./components/box/box.component";

const Skills = ({ skills }) => {
    return (
        <SkillsContainer name='skills' ref={skills}>
            
        </SkillsContainer>
    );
}

export default Skills;