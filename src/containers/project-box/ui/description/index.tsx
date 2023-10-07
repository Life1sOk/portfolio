import { socialIcons } from "../../../../utils/social-media";

import Paragraph from "@components/shared/paragraph";
import IconSocial from "@components/shared/icon-social";
import Tools from "@components/shared/tools";

import StatusProject from "./status";

import type { IStatus, IPosition } from "../..";

import {
  DescriptionUiStyle,
  Main,
  Links,
  Status,
  InfoWrapper,
  Title,
} from "./index.style";

interface IComponent {
  title: string;
  description: string;
  tools: string[];
  links: {
    github: string;
    website?: string;
  };
  status: IStatus;
  position: IPosition;
}

const DescriptionUi = (props: IComponent) => {
  const { title, description, tools, links, status, position } = props;

  return (
    <DescriptionUiStyle>
      <Title>{title}</Title>
      <InfoWrapper>
        <Status>
          <span>Status:</span>
          <StatusProject data={status} />
        </Status>
        <Status>
          <span>Possition:</span>
          <span>{position}</span>
        </Status>
      </InfoWrapper>
      <Main>
        <Paragraph title={description} />
      </Main>
      <Tools tools={tools} />
      <Links>
        <IconSocial
          icon={socialIcons.github}
          url={links.github}
          type="white"
          size="small"
          sm={`${title} - github`}
        />
        {links.website && (
          <IconSocial
            icon={socialIcons.view}
            url={links.website}
            type="white"
            size="small"
            sm={`${title} - link`}
          />
        )}
      </Links>
    </DescriptionUiStyle>
  );
};

export default DescriptionUi;
