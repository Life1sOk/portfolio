import React from "react";

import { ProjectsContainer } from "./projects.style";

const Projects = ({ projects }) => {
    return (
        <ProjectsContainer name='projects' ref={projects}>
            
        </ProjectsContainer>
    );
};

export default Projects