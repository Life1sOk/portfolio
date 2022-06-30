import React from 'react';
import { Link } from 'react-scroll/modules';

import './link.style.scss';

const LinkToComponent = ({ name, to, openToggle }) => {
    return (
        <Link onClick={openToggle} className='nav-menu-word' to={to} smooth={true} spy={true} duration={700}>
            {name}
        </Link>
    )
}

export default LinkToComponent;