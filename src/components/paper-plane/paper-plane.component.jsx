import React from "react";

import { ReactComponent as Plane } from '../../assets/paper-right.svg';

import { PaperPlaneContainer } from './paper-plane.style';

const PaperPlane = () => {
    return(
        <PaperPlaneContainer>
            <Plane />
        </PaperPlaneContainer>
    )
};

export default PaperPlane;