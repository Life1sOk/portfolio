import React from "react";

import Button from "../../components/button/button.component";
import Title from "../../components/title/title.component";
import Paragraph from "../../components/paragraph/paragraph.component";

import { ContactMeStyle, TitleWrapper, ButtonWrapper } from './contact-me.style';

const ContactMe = () => {
    return (
        <ContactMeStyle>
            <TitleWrapper>
                <Title number={4}>Get In Touch</Title>
            </TitleWrapper>
            <Paragraph side='center'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</Paragraph>
            <ButtonWrapper>
                <Button />
            </ButtonWrapper>
        </ContactMeStyle>
    )
};

export default ContactMe;