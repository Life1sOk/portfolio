import React from "react";

import { Outlet } from "react-router-dom";

const OutletWrapper = ({ children }) => {
    return (
        <>
            {children}
            <Outlet />
        </>
    )
};

export default OutletWrapper;