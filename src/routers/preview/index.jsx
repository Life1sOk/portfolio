import React from "react";

import { MainContainer, Introduction, Animation, MediaWrapper, IntroductionBottom, IdoWrapper, ProfWrapper } from './index.style';
// import Animation from "../../components/animation/animation.component";
import Button from "../../components/button/button.component";
import Slides from "./slides-animation";
import PaperPlane from "./paper-plane/paper-plane.component";
import Title from "../../components/title/title.component";

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
                    <span className="stand"> Result</span>!</IdoWrapper>
                <IntroductionBottom>
                    <PaperPlane />
                    <Button name='Projects ==>' type='projects'/>
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