import React from "react";

import { FiGithub, FiExternalLink } from 'react-icons/fi';

import Paragraph from "../../components/paragraph/paragraph.component";

import { ProjectBoxStyle, Image, Description, ImageWrapper, DesTitle, DesMain, Tools, Links, LinkWrapper } from './project-box.style';

const ProjectBox = ({ data, isLeftSide }) => {
    const { title, image, description, tools, links } = data;

    return (
        <ProjectBoxStyle>
            <ImageWrapper isLeftSide={isLeftSide}>
                <Image src={image.screen} alt={title} />
            </ImageWrapper>
            <Description isLeftSide={isLeftSide}>
                <DesTitle isLeftSide={isLeftSide}>{title}</DesTitle>
                <DesMain>
                    <Paragraph side={isLeftSide ? 'right' : 'left'}>{description}</Paragraph>
                </DesMain>
                <Tools isLeftSide={isLeftSide}>
                    {
                        tools.map((tool, index) => <li key={index}>{tool}</li>)
                    }
                </Tools>
                <Links isLeftSide={isLeftSide}>
                    <LinkWrapper href={links.github} target="_blank">
                        <FiGithub />
                    </LinkWrapper>
                    <LinkWrapper href={links.website} target="_blank">
                        <FiExternalLink />
                    </LinkWrapper>
                </Links>
            </Description>
        </ProjectBoxStyle>
    )
};

export default ProjectBox;