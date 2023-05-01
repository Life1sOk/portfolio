import React from "react";
import { useTranslation } from "react-i18next";

import Button from "../../components/button/button.component";
import Translate from "../../components/translate/translate.component";

import { NavLinksContainer, SideContainer, LinkWords } from "./nav-links.style";

const NavLinks = ({ isAside, scrollHandler, openNavHandler }) => {
  const { t } = useTranslation();

  const links = [
    { title: `${t("others.nav.one")}`, scroll: "About" },
    { title: `${t("others.nav.two")}`, scroll: "Tools" },
    { title: `${t("others.nav.three")}`, scroll: "Projects" },
    { title: `${t("others.nav.four")}`, scroll: "Contacts" },
  ];

  const toggleHandler = () => {
    if (openNavHandler) openNavHandler();
  };

  const scrollAndOpenHandler = (link) => {
    if (scrollHandler) scrollHandler(link);
    toggleHandler();
  };

  return (
    <NavLinksContainer isAside={isAside}>
      {isAside && <Translate type="row" toggleAction={toggleHandler} />}
      {links.map((link, index) => (
        <LinkWords
          key={index}
          isAside={isAside}
          onClick={() => scrollAndOpenHandler(link.scroll)}
        >
          <span className="number">{`0${index + 1}. `}</span>
          <span className="link">{link.title}</span>
        </LinkWords>
      ))}
      <SideContainer>
        <Button label={t("others.buttons.resume")} />
      </SideContainer>
      {!isAside && <Translate type="column" />}
    </NavLinksContainer>
  );
};

export default NavLinks;
