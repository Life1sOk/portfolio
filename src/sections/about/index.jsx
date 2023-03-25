import React, { useState } from "react";

import AboutMeContainer from "../../containers/about-me/about-me.container";

import foto from '../../assets/my-foto.jpg';

import { MainAbout, FotoWrapper, Foto } from './index.style';

const About = () => {
    const [loaded, setLoaded] = useState(false);

    return (
        <MainAbout>
            <AboutMeContainer />
            <FotoWrapper>
                <Foto src={foto}
                    alt='myface'
                    onLoad={() => setLoaded(true)}
                    state={loaded}
                />
            </FotoWrapper>
        </MainAbout>
    );
}

export default About;