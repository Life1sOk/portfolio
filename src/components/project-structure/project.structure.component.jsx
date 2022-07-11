import React from "react";

import { ProjectStructureContainer, ProjectImage, ProjectButtons, ProjectAbout, Title, Tools, Discription, Wrapper } from './project.structure.style';
import Button from '../button/button.component';

const ProjectStructure = ({ project, side }) => {
    const { title, img, tools, discription, git, site } = project;

    return (
        <Wrapper>
            <ProjectStructureContainer side={side}>
                <ProjectImage alt={title} src={img} />
                <ProjectAbout>
                    <Title>{title}</Title>
                    <Tools>
                        <div className="tool">tools:</div>
                        <div className="icon">{tools}</div>
                    </Tools>
                    <Discription>{discription}</Discription>
                    <ProjectButtons>
                        <Button type={'site'} name={'Site'} visit={() => openInNewTab(site)} />
                        <Button type={'github'} name={'Link'} visit={() => openInNewTab(git)} />
                    </ProjectButtons>
                </ProjectAbout>
            </ProjectStructureContainer>
        </Wrapper>
    );
}

const openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer');
};

export default ProjectStructure;