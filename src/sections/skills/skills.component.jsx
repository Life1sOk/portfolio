import React from "react";

import { basicLevel, nextLevel } from "../../utils/icons.skills";
import { SkillsContainer, H2, MainSkills, Basics, Advanced } from './skills.style';
import Icon from "../../components/icon-wrap/icon-wrap.component";

const Skills = () => {
    return (
        <SkillsContainer>
            <H2>Skills</H2>
            <MainSkills>
                <Basics>
                    {
                        basicLevel.map(icon => <Icon key={icon.name} name={icon.name} icon={icon.icon} />)
                    }
                </Basics>
                <Advanced>
                    {
                        nextLevel.map(icon => <Icon key={icon.name} name={icon.name} icon={icon.icon} />)
                    }
                </Advanced>
            </MainSkills>
        </SkillsContainer>
    );
}

export default Skills;