import React from "react";

import { MainContainer, Introduction, Animation, IntroductionBottom, IdoWrapper, ProfWrapper, Welcome } from './preview.style';
// import Animation from "../../components/animation/animation.component";
import Button from "../../components/button/button.component";
import Resume from "../../components/resume/resume.component";
import Slides from "../../components/slides-animation";
import PaperPlane from "../../components/paper-plane/paper-plane.component";

const Preview = () => {

    return (
        <MainContainer>
            <Introduction>
                <Welcome>Welcome, I'm <span className="name">Andrey</span></Welcome>
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
            <Animation>
                <Slides />
            </Animation>
        </MainContainer>
    );
}

export default Preview;