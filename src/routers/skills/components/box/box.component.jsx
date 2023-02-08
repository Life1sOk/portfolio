import React from "react";

import { BoxWrapper, BoxContainer, CardSide } from './box.style';

const Box = () => {
    return(
        <BoxWrapper>
            <BoxContainer>
                <CardSide id="front">Front</CardSide>
                <CardSide id="back">Back</CardSide>
                <CardSide id="left">Left</CardSide>
                <CardSide id="rigth">Rigth</CardSide>
                <CardSide id="top">Top</CardSide>
                <CardSide id="bottom">Bottom</CardSide>
            </BoxContainer>
        </BoxWrapper>
    )
};

export default Box;