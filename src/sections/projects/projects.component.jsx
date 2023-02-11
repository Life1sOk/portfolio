import React from "react";

import { allProjects } from "../../utils/projects.all";
import { ProjectsContainer, Checker } from "./projects.style";
// import ProjectStructure from "../../components/project-structure/project.structure.component";
import ButtonWindow from "../../components/button-window/button-window.component";
import Resume from "../../components/resume/resume.component";
import Contacts from "../../components/contacts/contacts.component";
import Button from "../../components/button/button.component";
import Mailto from "../../components/mailto/mailto.component";

const Projects = ({ projects }) => {
    return (
        <ProjectsContainer name='projects' ref={projects}>
            {/* {
                allProjects.map(project => {
                    return <ProjectStructure key={project.title} project={project} side={allProjects.indexOf(project)} />
                })
            } */}
            <ButtonWindow>
                <Contacts />
            </ButtonWindow>
            <Button />
            <Mailto />
        </ProjectsContainer>
    );
};

export default Projects