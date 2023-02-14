import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { LinkWords } from './linker.style';

const Linker = ({ name, title, to, children, pathname }) => {
    const [active, setActive] = useState(false);

    useEffect(() => {
        if(pathname === to) setActive(true);
        if(pathname !== to) setActive(false);
    }, [name, pathname]);

    return (
        <Link to={to} aria-label={`${title}`}>
            {name && <LinkWords active={active}>{name}</LinkWords>}
            {children}
        </Link>
    )
}

export default Linker;