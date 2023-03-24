import React from "react";

import { projects } from "../../utils/projects.all";

import Title from "../../ui/title/title.component";
import ProjectBox from "../../containers/project-box/project-box.component";

import { ProjectsContainer, ProjectsWrapper, TitleWrapper } from "./index.style";

const ProjectsSection = () => {
    return (
        <ProjectsContainer>
            <TitleWrapper>
                <Title number={3}>Some projects</Title>
            </TitleWrapper>
            <ProjectsWrapper>
                {
                    projects.map((project, index) => (
                        <ProjectBox key={index} data={project} isLeftSide={index % 2 === 0} />
                    ))
                }
            </ProjectsWrapper>
        </ProjectsContainer>
    );
};

export default ProjectsSection;