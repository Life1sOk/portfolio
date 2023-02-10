import React from "react";

import { bigBox } from "../../utils/tools-icons";

import { BoxWrapper, BoxContainer, CardSide, IconWrap } from './box-big.style';

const BoxBig = () => {

    return(
        <BoxWrapper>
            <BoxContainer>
                {
                    bigBox.map(side => 
                    <CardSide id={side.side} key={side.id}>
                        <IconWrap color={side.color}>{side.icon}</IconWrap>
                    </CardSide>)
                }
            </BoxContainer>
        </BoxWrapper>
    )
};

export default BoxBig;