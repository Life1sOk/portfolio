import React from "react";

import Title from "../../ui/title/title.component";
import Paragraph from "../../ui/paragraph/paragraph.component";
import ButtonWindow from "../../components/window/window.component";

import { ContactMeStyle, TitleWrapper, ButtonWrapper } from './contact-me.style';

const ContactMe = () => {
    return (
        <ContactMeStyle>
            <TitleWrapper>
                <Title number={4}>Get In Touch</Title>
            </TitleWrapper>
            <Paragraph side='center'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</Paragraph>
            <ButtonWrapper>
                <ButtonWindow />
            </ButtonWrapper>
        </ContactMeStyle>
    )
};

export default ContactMe;