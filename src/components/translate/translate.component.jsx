import React from "react";

import { useTranslation } from "react-i18next";

import { TranslateStyle, Picker } from "./translate.style";

const Translate = ({ type, toggleAction }) => {
  const { i18n } = useTranslation();

  const toggleHandler = () => {
    if (toggleAction) toggleAction();
  };

  const changeLangEng = () => {
    i18n.changeLanguage("en");
    toggleHandler();
  };
  const changeLangRus = () => {
    i18n.changeLanguage("ru");
    toggleHandler();
  };

  return (
    <TranslateStyle type={type}>
      <Picker state={i18n.resolvedLanguage === "en"} onClick={changeLangEng}>
        eng
      </Picker>
      <Picker state={i18n.resolvedLanguage === "ru"} onClick={changeLangRus}>
        rus
      </Picker>
    </TranslateStyle>
  );
};

export default Translate;
