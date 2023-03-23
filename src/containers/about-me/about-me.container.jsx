import React from "react";

import Title from "../../ui/title/title.component";

import { AboutMeStyle, PBlock } from './about-me.style';

const AboutMeContainer = () => {
    return (
        <AboutMeStyle>
            <Title number={1}>About me</Title>
            <PBlock>Hello, my name is Andrey Tsoy, and I am a web developer based in Kazakhstan with extensive front-end experience. My passion for building digital solutions has enabled me to successfully complete projects of varying complexity, and I take pride in helping people improve their businesses through technology.</PBlock>
            <PBlock>With a relentless pursuit of success, I am committed to delivering the best results for my clients. Seeing their businesses grow and succeed is what motivates me to work even harder. I am always eager to take on new challenges and welcome any opportunity for collaboration.</PBlock>
            <PBlock>If you're interested in working together, please don't hesitate to contact me. I'd love to discuss how I can help you achieve your goals.</PBlock>
        </AboutMeStyle>
    )
};

export default AboutMeContainer;