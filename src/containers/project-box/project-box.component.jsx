import React from "react";

import screen from '../../assets/Screenshot 2023-03-23 at 16.33.27.png';

import { ProjectBoxStyle, Image, Description } from './project-box.style';

const ProjectBox = () => {
    return (
        <ProjectBoxStyle>
            <Image src={screen} />
            <Description />
        </ProjectBoxStyle>
    )
};

export default ProjectBox;