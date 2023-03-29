import React, { forwardRef, useState } from "react";

import AboutMeContainer from "../../containers/about-me/about-me.container";

import foto from '../../assets/my-foto.jpg';

import { MainAbout, FotoWrapper, Foto } from './index.style';

const About = forwardRef((_, ref) => {
    const [checked, setChecked] = useState(false);

    return (
        <MainAbout ref={ref}>
            <AboutMeContainer />
            <FotoWrapper checked={checked} onClick={() => setChecked(true)}>
                <Foto src={foto} alt='myface' />
            </FotoWrapper>
        </MainAbout>
    );
});

export default About;