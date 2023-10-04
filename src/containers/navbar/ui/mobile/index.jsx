import React from "react";
import { useTranslation } from "react-i18next";

import ResumeWrapper from "../../../../wrappers/resume-wrapper";
import Button from "../../../../components/button/button.component";
import Translate from "../../../../components/translate/translate.component";
import Toggle from "../../../../components/toggle/toggle";

import { useGenerateLinks } from "../../hooks/useGenerateLinks";

import {
  MobileNavbarStyle,
  TopStyle,
  ToggleWrapper,
  LinksWrapper,
  ButtonContainer,
  LinkWord,
} from "./index.style";

const MobileNavbar = ({ scrollHandler, openNavHandler }) => {
  const { t, i18n } = useTranslation();

  const links = useGenerateLinks();

  const toggleHandler = () => {
    if (openNavHandler) openNavHandler();
  };

  const scrollAndOpenHandler = (link) => {
    if (scrollHandler) scrollHandler(link);
    toggleHandler();
  };

  return (
    <MobileNavbarStyle>
      <TopStyle>
        <Translate type="row" toggleAction={toggleHandler} />
        <ToggleWrapper>
          <Toggle />
        </ToggleWrapper>
      </TopStyle>
      <LinksWrapper>
        {links.map((link, index) => (
          <LinkWord key={index} onClick={() => scrollAndOpenHandler(link.scroll)}>
            <span className="number">{`0${index + 1}. `}</span>
            <span className="link">{link.title}</span>
          </LinkWord>
        ))}
      </LinksWrapper>
      <ButtonContainer>
        <ResumeWrapper lang={i18n.resolvedLanguage}>
          <Button label={t("others.buttons.resume")} />
        </ResumeWrapper>
      </ButtonContainer>
    </MobileNavbarStyle>
  );
};

export default MobileNavbar;
