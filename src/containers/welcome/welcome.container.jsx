import React from "react";
import { useTranslation } from "react-i18next";

import { locationBasics } from "../../utils/social-media";

import Button from "../../components/button/button.component";
import Mailto from "../../components/mail-to/mail-to.component";

import {
  WelcomeStyle,
  HelloTitle,
  TextStyle,
  MyName,
  MyProf,
  AboutStyle,
  ButtonWrapper,
} from "./welcome.style";

const WelcomeContainer = () => {
  const { t } = useTranslation();

  return (
    <WelcomeStyle>
      <HelloTitle>{t("welcome.hello")}</HelloTitle>
      <TextStyle>
        <MyName>{t("welcome.name")}</MyName>
        <MyProf>{t("welcome.do")}</MyProf>
      </TextStyle>
      <AboutStyle>
        {t("welcome.about")}
        <br />
        <span className="acc">{t("welcome.call")}</span>!
      </AboutStyle>
      <ButtonWrapper>
        <Mailto email={locationBasics.email}>
          <Button label={t("others.buttons.mail")} />
        </Mailto>
      </ButtonWrapper>
    </WelcomeStyle>
  );
};

export default WelcomeContainer;
