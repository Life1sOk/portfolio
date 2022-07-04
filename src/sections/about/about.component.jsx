import React from "react";

import { AboutContainer, AboutMe, JustLine } from './about.style';

const About = () => {
    return (
        <AboutContainer>
            <JustLine />
            <AboutMe>
                <h2>About</h2>
                <p>__________________________ </p>
                <p> _______________________________________________________</p>
            </AboutMe>
        </AboutContainer>
    );
}

export default About;