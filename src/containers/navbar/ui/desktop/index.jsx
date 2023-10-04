import React, { useId } from "react";
import { useTranslation } from "react-i18next";

import ResumeWrapper from "../../../../wrappers/resume-wrapper";
import Button from "../../../../components/button/button.component";
import Translate from "../../../../components/translate/translate.component";
import Toggle from "../../../../components/toggle/toggle";

import { useGenerateLinks } from "../../hooks/useGenerateLinks";

import { DesktopNavbarStyle, DesktopNavbarSide, LinkWrapper } from "./index.style";

const DesktopNavbar = ({ scrollHandler }) => {
  const uniqueId = useId();

  const { t, i18n } = useTranslation();
  const links = useGenerateLinks();

  const scrollAndOpenHandler = (link) => scrollHandler(link);

  return (
    <DesktopNavbarStyle>
      {links.map((link, index) => (
        <LinkWrapper
          key={uniqueId + index}
          onClick={() => scrollAndOpenHandler(link.scroll)}
        >
          <span className="number">{`0${index + 1}. `}</span>
          <span className="link">{link.title}</span>
        </LinkWrapper>
      ))}
      <DesktopNavbarSide>
        <ResumeWrapper lang={i18n.resolvedLanguage}>
          <Button label={t("others.buttons.resume")} />
        </ResumeWrapper>
        <Toggle />
        <Translate type="column" />
      </DesktopNavbarSide>
    </DesktopNavbarStyle>
  );
};

export default DesktopNavbar;
