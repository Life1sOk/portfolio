import React from "react";

import { ParagraphStyle } from './paragraph.style';

const Paragraph = ({ children }) => {
    return (
        <ParagraphStyle>{children}</ParagraphStyle>
    )
};

export default Paragraph;