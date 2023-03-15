import React from "react";


import Slides from "../../components/slides-animation";
import Planet from "../../entities/planet-prev";

import { MainContainer, Introduction, Animation, MediaWrapper, PlanetWrapper, PrevWrapper } from './index.style';

const Preview = () => {
    return (
        <MainContainer>
            <Introduction>
                <PlanetWrapper>
                    <Planet />
                </PlanetWrapper>
                <PrevWrapper />
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