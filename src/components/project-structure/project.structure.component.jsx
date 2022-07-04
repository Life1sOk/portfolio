import React from "react";

import { ProjectStructureContainer, ProjectImage, ProjectButtons, ProjectAbout, JustLine, Title, Tools, Discription } from './project.structure.style';
import Button from '../button/button.component';

const ProjectStructure = ({ project, side }) => {
    const { title, img, tools, discription, link } = project;

    return (
        <ProjectStructureContainer side={side}>
            <JustLine side='left' />
            <ProjectImage alt={title} src={img} />
            <ProjectAbout>
                <Title>{title}</Title>
                <Tools>tools</Tools>
                <Discription>{discription}</Discription>
                <ProjectButtons>
                    <Button type={'point3'} name={'Link'} onClick={link} />
                    <Button type={'point3'} name={'Link'} onClick={link} />
                </ProjectButtons>
            </ProjectAbout>
            <JustLine side='right' />
        </ProjectStructureContainer>
    );
}

export default ProjectStructure;