import { forwardRef } from "react";
import { useTranslation } from "react-i18next";

import { useProjectStore } from "./conts";

import { MainProject, ScondaryProject } from "@components/containers/project-box";
import Title from "@components/shared/title";

import {
  ProjectsContainer,
  ProjectsWrapper,
  TitleWrapper,
  ProjectsSmallContainerStyle,
  TitleSmall,
  ProjectsSmallWrapper,
} from "./index.style";

const ProjectsSub = forwardRef<HTMLElement>(function Projects(_, ref) {
  const { t } = useTranslation();

  const projects = useProjectStore();

  return (
    <ProjectsContainer ref={ref}>
      <TitleWrapper>
        <Title number={3} title={t("projects.title")} />
      </TitleWrapper>
      <ProjectsWrapper>
        {projects.big.map((project, index) => (
          <MainProject key={index} data={project} />
        ))}
      </ProjectsWrapper>
      <ProjectsSmallContainerStyle>
        <TitleSmall>{t("projects.titleSmall")}</TitleSmall>
        <ProjectsSmallWrapper>
          {projects.small.map((project, index) => (
            <ScondaryProject key={index} data={project} />
          ))}
        </ProjectsSmallWrapper>
      </ProjectsSmallContainerStyle>
    </ProjectsContainer>
  );
});

export default ProjectsSub;
