import React from "react";
import { FaRegCopyright } from 'react-icons/fa';

import './copyright-style.scss';

const Copyright = () => {
    return(
        <div className="copyright-container">
            <FaRegCopyright />
            <span>2022</span>
            <span>Andrey Tsoy</span>
        </div>
    );
}

export default Copyright;