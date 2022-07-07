import React from "react";

import { ProjectStructureContainer, ProjectImage, ProjectButtons, ProjectAbout, JustLine, Title, Tools, Discription } from './project.structure.style';
import Button from '../button/button.component';

const ProjectStructure = ({ project, side }) => {
    const { title, img, tools, discription, git, site } = project;

    const openInNewTab = url => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

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
                    <Button type={'type2'} name={'Site'} visit={() => openInNewTab(site)} />
                    <Button type={'github'} name={'Link'} visit={() => openInNewTab(git)} />
                </ProjectButtons>
            </ProjectAbout>
            <JustLine side='right' />
        </ProjectStructureContainer>
    );
}

export default ProjectStructure;