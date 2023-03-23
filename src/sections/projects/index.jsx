import React from "react";

import ProjectBox from "../../containers/project-box/project-box.component";

import { ProjectsContainer } from "./index.style";

const ProjectsSection = () => {
    return (
        <ProjectsContainer>
            <ProjectBox />
        </ProjectsContainer>
    );
};

export default ProjectsSection;