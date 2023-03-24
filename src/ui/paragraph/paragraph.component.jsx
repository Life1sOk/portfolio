import React from "react";

import { ParagraphStyle } from './paragraph.style';

const Paragraph = ({ children, side }) => {
    return (
        <ParagraphStyle side={side}>{children}</ParagraphStyle>
    )
};

export default Paragraph;