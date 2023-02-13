import React from "react";

import ButtonWindow from "../../components/buttons/window/window.component";
import Button from "../../components/buttons/mail/mail.component";
import Mailto from "../../components/mailto/mailto.component";
import Slides from "../../components/slides-animation";
import Resume from "../../components/resume/resume.component";
import Title from "../../components/title/title.component";

import { MainContainer, Introduction, Animation, MediaWrapper, IntroductionBottom, IdoWrapper, ProfWrapper } from './index.style';

const Preview = () => {
    return (
        <MainContainer>
            <Introduction>
                <Title>Welcome, I'm <span className="name">Andrey</span></Title>
                <ProfWrapper>Front-end Developer</ProfWrapper> 
                <IdoWrapper>I turn new ideas into products and help people discover new possibilities.</IdoWrapper>
                <IdoWrapper>My work standards:
                    <span className="stand"> Quality</span>, 
                    <span className="stand"> Reliability</span>,
                    <span className="stand"> Result</span>!
                </IdoWrapper>
                <IntroductionBottom>
                    <ButtonWindow name='Resume' side='top'>
                        <Resume />
                    </ButtonWindow>
                    <Mailto email='andreytsoy.webdev@gmail.com'>
                        <Button />
                    </Mailto>
                </IntroductionBottom>
            </Introduction>
            <MediaWrapper>
                <Animation>
                    <Slides />
                </Animation>
            </MediaWrapper>
        </MainContainer>
    );
}

export default Preview;