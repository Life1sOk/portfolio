import React from "react";

import { ProjectsContainer } from "./projects.style";

import ProjectBox from "../../components/project-box/project-box.component";

const Projects = ({ projects }) => {
    return (
        <ProjectsContainer name='projects' ref={projects}>
            <ProjectBox />
        </ProjectsContainer>
    );
};

export default Projects