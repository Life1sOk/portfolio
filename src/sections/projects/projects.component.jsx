import React from "react";

import { allProjects } from "../../utils/projects.all";
import { ProjectsContainer, Checker } from "./projects.style";
// import ProjectStructure from "../../components/project-structure/project.structure.component";
import ButtonWindow from "../../components/buttons/window/window.component";
import Resume from "../../components/resume/resume.component";
import ButtonContacts from "../../components/buttons/contacts/contacts.component";
import Contacts from "../../components/contacts/contacts.component";
import Button from "../../components/buttons/mail/mail.component";
import Mailto from "../../components/mailto/mailto.component";

const Projects = ({ projects }) => {
    return (
        <ProjectsContainer name='projects' ref={projects}>
            {/* {
                allProjects.map(project => {
                    return <ProjectStructure key={project.title} project={project} side={allProjects.indexOf(project)} />
                })
            } */}
            {/* <ButtonWindow>
                <Contacts />
            </ButtonWindow>
            <Button />
            <Mailto />
            <ButtonContacts /> */}
        </ProjectsContainer>
    );
};

export default Projects