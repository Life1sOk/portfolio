import React from 'react';
import { Link } from 'react-scroll/modules';

import { NavbarWords } from './link.style';

const LinkToComponent = ({ name, to, openToggle, offset }) => {
    return (
        <Link onClick={openToggle} to={to} smooth={true} spy={true} duration={700} offset={offset}>
            <NavbarWords>{name}</NavbarWords>
        </Link>
    )
}

export default LinkToComponent;