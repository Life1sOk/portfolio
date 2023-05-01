import React, { forwardRef, memo } from "react";
import { useTranslation } from "react-i18next";

import { projectStore } from "../../utils/projects.all";

import Title from "../../components/title/title.component";
import ProjectBox from "../../containers/project-box/project-box.component";
import ProjectSmall from "../../containers/projects-small/projects-small.container";

import {
  ProjectsContainer,
  ProjectsWrapper,
  TitleWrapper,
  ProjectsSmallContainerStyle,
  TitleSmall,
  ProjectsSmallWrapper,
} from "./index.style";

const ProjectsSection = memo(
  forwardRef((_, ref) => {
    const { t } = useTranslation();

    const projects = projectStore();

    return (
      <ProjectsContainer ref={ref}>
        <TitleWrapper>
          <Title number={3}>{t("projects.title")}</Title>
        </TitleWrapper>
        <ProjectsWrapper>
          {projects.big.map((project, index) => (
            <ProjectBox
              key={index}
              data={project}
              isLeftSide={index % 2 === 0}
            />
          ))}
        </ProjectsWrapper>
        <ProjectsSmallContainerStyle>
          <TitleSmall>{t("projects.titleSmall")}</TitleSmall>
          <ProjectsSmallWrapper>
            {projects.small.map((project, index) => (
              <ProjectSmall key={index} data={project} />
            ))}
          </ProjectsSmallWrapper>
        </ProjectsSmallContainerStyle>
      </ProjectsContainer>
    );
  })
);

export default ProjectsSection;
