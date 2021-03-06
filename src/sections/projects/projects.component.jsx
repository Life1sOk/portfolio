import React from "react";

import { allProjects } from "../../utils/projects.all";
import { ProjectsContainer } from "./projects.style";
import ProjectStructure from "../../components/project-structure/project.structure.component";

const Projects = ({ projects }) => {
    return (
        <ProjectsContainer name='projects' ref={projects}>
            {
                allProjects.map(project => {
                    return <ProjectStructure key={project.title} project={project} side={allProjects.indexOf(project)} />
                })
            }
        </ProjectsContainer>
    );
}

export default Projects