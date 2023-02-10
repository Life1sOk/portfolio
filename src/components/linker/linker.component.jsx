import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import { LinkWords } from './linker.style';

const Linker = ({ name, to, children }) => {
    const [active, setActive] = useState(false);
    let { pathname } = useLocation();

    useEffect(() => {
        let currentPage = `/${name?.toLowerCase()}`;

        if (pathname === currentPage || pathname.includes(currentPage)) return setActive(true);
        if (pathname !== currentPage) return setActive(false);
    }, [name, pathname]);

    return (
        <Link to={to}>
            {name && <LinkWords active={active}>{name}</LinkWords>}
            {children}
        </Link>
    )
}

export default Linker;