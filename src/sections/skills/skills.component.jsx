import React from "react";

import { basicLevel, nextLevel } from "../../utils/icons.skills";
import { SkillsContainer, Title, MainSkills, Basics, Advanced } from './skills.style';
import Icon from "../../components/icon-wrap/icon-wrap.component";

const Skills = ({ skills }) => {
    return (
        <SkillsContainer name='skills' ref={skills}>
            <Title>Skills</Title>
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