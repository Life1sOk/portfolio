import React from "react";

import { AiOutlineFolder } from "react-icons/ai";
import { FiGithub, FiExternalLink } from "react-icons/fi";

import {
  SmallBoxStyle,
  BoxTop,
  FolderIcon,
  LinkWrapper,
  LinksMain,
  Title,
  Description,
  Tools,
} from "./projects-small.style";

const ProjectSmall = ({ data }) => {
  const { title, description, links, tools } = data;

  return (
    <SmallBoxStyle>
      <BoxTop>
        <FolderIcon>
          <AiOutlineFolder />
        </FolderIcon>
        <LinksMain>
          <LinkWrapper href={links.github} target="_blank">
            <FiGithub />
          </LinkWrapper>
          {links.website && (
            <LinkWrapper href={links.website} target="_blank">
              <FiExternalLink />
            </LinkWrapper>
          )}
        </LinksMain>
      </BoxTop>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Tools>
        {tools.map((tool, index) => (
          <li key={index}>{tool}</li>
        ))}
      </Tools>
    </SmallBoxStyle>
  );
};

export default ProjectSmall;
