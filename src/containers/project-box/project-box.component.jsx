import React from "react";

import ImageUi from "./image/image.ui";
import DescriptionUi from "./description/description.ui";

import { ProjectBoxStyle } from "./project-box.style";

const ProjectBox = ({ data, isLeftSide }) => {
  const { title, image, description, tools, links } = data;

  return (
    <ProjectBoxStyle>
      <ImageUi isLeftSide={isLeftSide} screen={image.screen} title={title} />
      <DescriptionUi
        isLeftSide={isLeftSide}
        title={title}
        description={description}
        tools={tools}
        links={links}
      />
    </ProjectBoxStyle>
  );
};

export default ProjectBox;
