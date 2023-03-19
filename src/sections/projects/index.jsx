import React from "react";

import { ProjectsWrapper, ProjectsContainer } from "./index.style";

import ProjectBox from "../../components/project-box/project-box.component";

const ProjectsSection = ({ projects }) => {
    return (
        <ProjectsWrapper>
            <ProjectsContainer name='projects' ref={projects}>
                <ProjectBox />
                <ProjectBox />
                <ProjectBox />
                <ProjectBox />
                <ProjectBox />
                <ProjectBox />
            </ProjectsContainer>
        </ProjectsWrapper>
    );
};

export default ProjectsSection;