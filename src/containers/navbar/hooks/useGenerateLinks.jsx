import { useTranslation } from "react-i18next";

export const useGenerateLinks = () => {
  const { t } = useTranslation();

  const links = [
    { title: `${t("others.nav.one")}`, scroll: "About" },
    { title: `${t("others.nav.two")}`, scroll: "Tools" },
    { title: `${t("others.nav.three")}`, scroll: "Projects" },
    { title: `${t("others.nav.four")}`, scroll: "Contacts" },
  ];

  return links;
};
