import React from "react";

import { LBoxContainer, LBoxFront } from './language-box.style';

const LBox = ({lang, position}) => {
    
    return(
        <LBoxContainer lang={lang} position={position}>
            <LBoxFront>
                {lang}
            </LBoxFront>
        </LBoxContainer>
    )
};

export default LBox;