import React from "react";

import { tierOne, tierTwo, tierThree } from "../../../../utils/tools-icons";

import { RightContainer, BasicsContainer, FrameworksLibrariesContainer} from './right-block.style';
import Title from "../../../../components/title/title.component";
import Icon from "../../../../components/icon-wrap/icon-wrap.component";

const RightBlock = () => {
    return(
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
    )
};

export default RightBlock;