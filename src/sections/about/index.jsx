import React, { forwardRef, useState, memo } from "react";

import AboutMeContainer from "../../containers/about-me/about-me.container";

import foto from "../../assets/my-foto.webp";

import { MainAbout, FotoWrapper, Foto, FotoFront } from "./index.style";

const About = memo(
  forwardRef((_, ref) => {
    const [isChecked, setIsChecked] = useState(false);

    return (
      <MainAbout ref={ref}>
        <AboutMeContainer />
        <FotoWrapper onClick={() => setIsChecked(true)}>
          <Foto src={foto} alt="myface" />
          <FotoFront isChecked={isChecked} />
        </FotoWrapper>
      </MainAbout>
    );
  })
);

export default About;
