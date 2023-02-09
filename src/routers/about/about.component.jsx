import React, { useState } from "react";

import foto from '../../assets/IMG_3531.jpg';

import { MainAbout, LeftContainer, FotoWrapper, Foto, QuoteWrapper, Quote, RightContainer, PBlock } from './about.style';
import Title from "../../components/title/title.component";

const About = () => {
    const [ loaded, setLoaded ] = useState(false);

    return (
        <MainAbout>
            <LeftContainer>
                <FotoWrapper>
                    <Foto src={foto} onLoad={() => setLoaded(true)} state={loaded}/>
                </FotoWrapper>
                    <QuoteWrapper>
                        <Quote>
                            If you really want to do something, you’ll find a way. If you don’t, you’ll find an excuse.
                        </Quote><br />
                        Jim Rohn
                    </QuoteWrapper>
            </LeftContainer>
            <RightContainer>
                <Title tier={true}>About</Title>
                <PBlock>Hi, I'm Andrey Tsoy. Web developer with front-end experience from Kazakhstan. I implement projects of varying complexity and help people improve their businesses.</PBlock>
                <PBlock>Whatever the goal is, I do my best to achieve success. <br />Success brings me maximum pleasure and encourages me to work even better and harder.</PBlock>
                <PBlock>One of the projects I am proud of is the "goal planner". This is a project that I am working on and putting my whole soul into. Along with this, I develop by studying different types of planning and coming up with new interesting ideas.</PBlock>
                <PBlock>I am always glad to new opportunities and open to cooperation.</PBlock>
            </RightContainer>
        </MainAbout>
    );
}

export default About;