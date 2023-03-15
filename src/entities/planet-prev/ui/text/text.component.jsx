import React from "react";

import { TextStyle, TextLine } from './text.style';

const Text = ({ type, top, left }) => {
    return (
        <TextStyle type={type} top={top} left={left}>
            <TextLine>WELCOME TO MY ABODE</TextLine>
            <TextLine>I'M ANDREY, FRONT-END DEVELOPER</TextLine>
        </TextStyle>
    )
};

export default Text;