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
                <Tools>
                    <div className="tool">tools:</div>
                    <div className="icon">{tools}</div>
                </Tools>
                <Discription>{discription}</Discription>
                <ProjectButtons>
                    <Button type={'type2'} name={'Site'} onClick={link} />
                    <Button type={'github'} name={'Link'} onClick={link} />
                </ProjectButtons>
            </ProjectAbout>
            <JustLine side='right' />
        </ProjectStructureContainer>
    );
}

export default ProjectStructure;