import React from "react";

import { tierOne, tierTwo, tierThree } from "../../utils/tools-icons"; 

import Icon from "../../components/icon-wrap/icon-wrap.component";
import Title from "../../components/title/title.component";
import BoxBig from "../../components/box-big/box-big.component";

import { MainSkills, LeftContainer, RightContainer, BasicsContainer, FrameworksLibrariesContainer } from "./index.style";

const Skills = () => {
    return (
        <MainSkills>
            <LeftContainer>
                <BoxBig />
            </LeftContainer>
            <RightContainer>
                <Title tier={true}>Skill sets</Title>
                <BasicsContainer>
                    {
                        tierOne.map((tool, index) => <Icon name={tool.name} time={tool.time} icon={tool.icon} key={index}/>)
                    }
                </BasicsContainer>
                <FrameworksLibrariesContainer>
                    {
                        tierTwo.map((tool, index) => <Icon name={tool.name} time={tool.time} icon={tool.icon} key={index}/>)
                    }
                </FrameworksLibrariesContainer>
                <BasicsContainer>
                    {
                        tierThree.map((tool, index) => <Icon name={tool.name} time={tool.time} icon={tool.icon} key={index}/>)
                    }
                </BasicsContainer>
            </RightContainer>
        </MainSkills>
    );
}

export default Skills;