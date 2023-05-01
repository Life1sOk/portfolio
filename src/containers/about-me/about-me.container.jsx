import React from "react";
import { useTranslation } from "react-i18next";

import Title from "../../components/title/title.component";
import Paragraph from "../../components/paragraph/paragraph.component";

import { AboutMeStyle } from "./about-me.style";

const AboutMeContainer = () => {
  const { t } = useTranslation();

  return (
    <AboutMeStyle>
      <Title number={1}>{t("about.title")}</Title>
      <Paragraph>{t("about.part1")}</Paragraph>
      <Paragraph>{t("about.part2")}</Paragraph>
      <Paragraph>{t("about.part3")}</Paragraph>
    </AboutMeStyle>
  );
};

export default AboutMeContainer;
