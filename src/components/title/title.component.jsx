import React from "react";

import { TitleStyle } from './title.style';

const Title = ({tier, children}) => {
    return(
        <TitleStyle tier={tier}>{children}</TitleStyle>
    )
};

export default Title;