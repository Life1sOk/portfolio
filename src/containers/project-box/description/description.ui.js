import React from "react";

import { socialIcons } from "../../../utils/social-media";

import Paragraph from "../../../components/paragraph/paragraph.component";
import IconSocial from "../../../components/icon-social/icon-social.component";
import Tools from "../../../components/tools/tools.component";

import { DescriptionUiStyle, Title, Main, Links } from "./description.ui.style";

const DescriptionUi = ({ isLeftSide, title, description, tools, links }) => {
  return (
    <DescriptionUiStyle isLeftSide={isLeftSide}>
      <Title isLeftSide={isLeftSide}>{title}</Title>
      <Main side={isLeftSide ? "right" : "left"}>
        <Paragraph>{description}</Paragraph>
      </Main>
      <Tools tools={tools} isLeftSide={isLeftSide} />
      {/* <Tools isLeftSide={isLeftSide}>
        {tools.map((tool, index) => (
          <li key={index}>{tool}</li>
        ))}
      </Tools> */}
      <Links isLeftSide={isLeftSide}>
        <IconSocial
          icon={socialIcons.github}
          url={links.github}
          type="white"
          size="small"
        />
        <IconSocial
          icon={socialIcons.view}
          url={links.website}
          type="white"
          size="small"
        />
      </Links>
    </DescriptionUiStyle>
  );
};

export default DescriptionUi;
