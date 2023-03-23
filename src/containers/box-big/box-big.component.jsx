import React from "react";

import { bigBox } from "../../utils/tools-icons";

import { BoxWrapper, Box, CardSide, IconWrap } from './box-big.style';

const BoxBig = () => {

    return (
        <BoxWrapper>
            <Box>
                {
                    bigBox.map(side =>
                        <CardSide id={side.side} key={side.id}>
                            <IconWrap color={side.color}>{side.icon}</IconWrap>
                        </CardSide>)
                }
            </Box>
        </BoxWrapper>
    )
};

export default BoxBig;