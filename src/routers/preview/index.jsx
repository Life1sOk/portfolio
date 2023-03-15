import React from "react";

import Slides from "../../entities/slides-animation";
import ButtonMail from "../../components/buttons/mail/mail.component";
import ButtonWindow from "../../components/buttons/window/window.component";
import Planet from "../../entities/planet-prev";
import { About } from "../../entities/preview";

import { MainWrapper, MainContainer, Introduction, Animation, MediaWrapper, PlanetWrapper, PrevWrapper, ButtonWrapper } from './index.style';

const Preview = () => {
    return (
        <MainWrapper>
            <MainContainer>
                <Introduction>
                    <PlanetWrapper>
                        <Planet />
                    </PlanetWrapper>
                    <PrevWrapper>
                        <About />
                        <ButtonWrapper>
                            <ButtonMail />
                            <ButtonWindow name='Resume' />
                        </ButtonWrapper>
                    </PrevWrapper>
                </Introduction>
                <MediaWrapper>
                    <Animation>
                        <Slides />
                    </Animation>
                </MediaWrapper>
            </MainContainer>
        </MainWrapper>
    );
}

export default Preview;