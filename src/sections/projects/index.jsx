import React, { forwardRef } from "react";

import { projects, smallProjects } from "../../utils/projects.all";

import Title from "../../components/title/title.component";
import ProjectBox from "../../containers/project-box/project-box.component";
import ProjectSmall from "../../containers/projects-small/projects-small.container";

import { ProjectsContainer, ProjectsWrapper, TitleWrapper, ProjectsSmallContainerStyle, TitleSmall, ProjectsSmallWrapper } from "./index.style";

const ProjectsSection = forwardRef((_, ref) => {
    return (
        <ProjectsContainer ref={ref}>
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
            <ProjectsSmallContainerStyle>
                <TitleSmall>Others small projects:</TitleSmall>
                <ProjectsSmallWrapper>
                    {
                        smallProjects.map((project, index) => <ProjectSmall key={index} data={project} />)
                    }
                </ProjectsSmallWrapper>
            </ProjectsSmallContainerStyle>
        </ProjectsContainer>
    );
});

export default ProjectsSection;