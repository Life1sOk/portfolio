import React from "react";

import { IconWrapContainer, IconWrap } from './icon-wrap.style';

const Icon = ({ icon, name }) => {
    return (
        <IconWrapContainer>
            <IconWrap>{icon}</IconWrap>
            <span className="icon-name">{name}</span>
        </IconWrapContainer>
    );
}

export default Icon;