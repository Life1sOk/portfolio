import React from "react";

import Text from "./ui/text/text.component";
import PlanetImg from "./ui/planet/planet";

import { PlanetStyle, DiskStyle } from './index.style';

const PlanetPrev = () => {
    // Planet  - index 10-19;

    return (
        <PlanetStyle>
            <Text />
            <PlanetImg>
                <Text type='snow' top={40} left={-60} />
            </PlanetImg>
            <DiskStyle />
        </PlanetStyle>
    )
};

export default PlanetPrev;