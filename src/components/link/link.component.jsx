import React from 'react';
import { Link } from 'react-scroll/modules';

import { NavbarWords } from './link.style';

const LinkToComponent = ({ name, to, openToggle }) => {
    return (
        <Link onClick={openToggle} to={to} smooth={true} spy={true} duration={700}>
            <NavbarWords>{name}</NavbarWords>
        </Link>
    )
}

export default LinkToComponent;