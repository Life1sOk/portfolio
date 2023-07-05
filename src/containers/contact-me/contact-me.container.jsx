import React from "react";

import { useTranslation } from "react-i18next";

import { locationBasics, socialMedia } from "../../utils/social-media";

import Mailto from "../../components/mail-to/mail-to.component";
import Button from "../../components/button/button.component";
import Title from "../../components/title/title.component";
import Paragraph from "../../components/paragraph/paragraph.component";
import IconSocial from "../../components/icon-social/icon-social.component";

import {
  ContactMeStyle,
  TitleWrapper,
  ButtonWrapper,
  SocialWrapper,
} from "./contact-me.style";

const ContactMe = () => {
  const { t } = useTranslation();

  return (
    <ContactMeStyle>
      <TitleWrapper>
        <Title number={4}>{t("footer.title")}</Title>
      </TitleWrapper>
      <Paragraph>{t("footer.lastDance.part1")}</Paragraph>
      <ButtonWrapper>
        <Mailto email={locationBasics.email}>
          <Button label={t("others.buttons.mail")} />
        </Mailto>
      </ButtonWrapper>
      <SocialWrapper>
        {socialMedia.map((social, index) => (
          <IconSocial key={index} icon={social.icon} url={social.url} sm={social.sm} />
        ))}
      </SocialWrapper>
    </ContactMeStyle>
  );
};

export default ContactMe;
