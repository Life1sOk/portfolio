import { useTranslation } from "react-i18next";

import Title from "@components/shared/title";
import Paragraph from "@components/shared/paragraph";

import { AboutMeStyle } from "./index.style";

const AboutMeContainer = () => {
  const { t } = useTranslation();

  return (
    <AboutMeStyle>
      <Title number={1} title={t("about.title")} />
      <Paragraph title={t("about.part1")} />
      <Paragraph title={t("about.part2")} />
      <Paragraph title={t("about.part3")} />
    </AboutMeStyle>
  );
};

export default AboutMeContainer;
