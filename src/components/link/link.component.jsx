import React from 'react';
import { Link } from 'react-scroll/modules';

import { NavbarWords, MyName } from './link.style';

const LinkToComponent = ({ name, to, openToggle, offset, typeLink }) => {
    return (
        <Link onClick={openToggle} to={to} smooth={true} spy={true} duration={700} offset={offset}>
            {(typeLink === 'name') ? <MyName>{name}</MyName> :
                <NavbarWords>{name}</NavbarWords>
            }
        </Link>
    )
}

export default LinkToComponent;