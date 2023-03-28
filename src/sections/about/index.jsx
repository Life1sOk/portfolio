import React, { forwardRef } from "react";

import AboutMeContainer from "../../containers/about-me/about-me.container";

import foto from '../../assets/my-foto.jpg';

import { MainAbout, FotoWrapper, Foto } from './index.style';

const About = forwardRef((_, ref) => {
    return (
        <MainAbout ref={ref}>
            <AboutMeContainer />
            <FotoWrapper>
                <Foto src={foto} alt='myface' />
            </FotoWrapper>
        </MainAbout>
    );
});

export default About;