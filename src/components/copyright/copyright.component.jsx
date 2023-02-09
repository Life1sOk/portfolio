import React from "react";
import { FaRegCopyright } from 'react-icons/fa';

import { CopyrightContainer } from './copyright-style';

const Copyright = () => {
    return (
        <CopyrightContainer>
            <FaRegCopyright />
            <span>2023</span>
            <span className="name">Andrey Tsoy</span>
        </CopyrightContainer>
    );
}

export default Copyright;