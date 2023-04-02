import React, { forwardRef, memo } from "react";

import Slides from "../../containers/slides-animation";
import WelcomeContainer from "../../containers/welcome/welcome.container";

import { MainContainer, Animation } from "./index.style";

const PreviewSection = memo(
  forwardRef((_, ref) => {
    return (
      <MainContainer ref={ref}>
        <WelcomeContainer />
        <Animation>
          <Slides />
        </Animation>
      </MainContainer>
    );
  })
);

export default PreviewSection;
