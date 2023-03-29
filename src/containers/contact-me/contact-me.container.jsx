import React from "react";

import { locationBasics, socialMedia } from "../../utils/social-media";

import Mailto from "../../components/mail-to/mail-to.component";
import Button from "../../components/button/button.component";
import Title from "../../components/title/title.component";
import Paragraph from "../../components/paragraph/paragraph.component";
import IconSocial from "../../components/icon-social/icon-social.component";

import { ContactMeStyle, TitleWrapper, ButtonWrapper, SocialWrapper } from './contact-me.style';

const ContactMe = () => {
    return (
        <ContactMeStyle>
            <TitleWrapper>
                <Title number={4}>Get In Touch</Title>
            </TitleWrapper>
            <Paragraph side='center'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</Paragraph>
            <ButtonWrapper>
                <Mailto email={locationBasics.email}>
                    <Button label='Mail me!' />
                </Mailto>
            </ButtonWrapper>
            <SocialWrapper>
                {
                    socialMedia.map((social, index) =>
                        <IconSocial key={index} data={social} />
                    )}
            </SocialWrapper>
        </ContactMeStyle>
    )
};

export default ContactMe;