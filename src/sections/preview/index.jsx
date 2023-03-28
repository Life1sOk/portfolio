import React, { forwardRef } from "react";

import Slides from "../../containers/slides-animation";
import WelcomeContainer from "../../containers/welcome/welcome.container";

import { MainContainer, Animation } from './index.style';

const PreviewSection = forwardRef((_, ref) => {

    return (
        <MainContainer ref={ref}>
            <WelcomeContainer />
            <Animation>
                <Slides />
            </Animation>
        </MainContainer>
    );
});

export default PreviewSection;