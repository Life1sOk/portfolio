import React from "react";
import { Link } from "react-router-dom";

const Linker = ({ title, to, children }) => {

    return (
        <Link to={to} aria-label={`${title}`}>
            {children}
        </Link>
    )
}

export default Linker;