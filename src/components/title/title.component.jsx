import React from "react";

import { TitleStyle, TitleNumber } from './title.style';

const Title = ({ children, number }) => {
    return (
        <TitleStyle>
            <TitleNumber>{`0${number}.`}</TitleNumber>
            {children}
        </TitleStyle>
    )
};

export default Title;