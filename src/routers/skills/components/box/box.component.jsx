import React from "react";

import { BoxWrapper, BoxContainer, CardSide, IconWrap } from './box.style';

const Box = ({datas}) => {
    const { id, icon, left, top, rotate, duration, color } = datas;

    return(
        <BoxWrapper number={id} left={left} top={top} duration={duration}>
            <BoxContainer rotate={rotate}>
                <CardSide id="front">
                    <IconWrap color={color}>
                        {icon}
                    </IconWrap>
                </CardSide>
                <CardSide id="back">
                    <IconWrap color={color}>
                        {icon}
                    </IconWrap>
                </CardSide>
                <CardSide id="left">
                    <IconWrap color={color}>
                        {icon}
                    </IconWrap>
                </CardSide>
                <CardSide id="rigth">
                    <IconWrap color={color}>
                        {icon}
                    </IconWrap>
                </CardSide>
                <CardSide id="top">
                    <IconWrap color={color}>
                        {icon}
                    </IconWrap>
                </CardSide>
                <CardSide id="bottom">
                    <IconWrap color={color}>
                        {icon}
                    </IconWrap>
                </CardSide>
            </BoxContainer>
        </BoxWrapper>
    )
};

export default Box;