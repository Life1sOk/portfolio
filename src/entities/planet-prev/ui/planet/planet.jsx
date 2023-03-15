import React from "react";

import { PlanetStyle } from './planet.style';

const PlanetImg = ({ children }) => {
    return (
        <PlanetStyle>
            {children}
        </PlanetStyle>
    )
};

export default PlanetImg;