import React from "react";

import { AsideNavStyle, BlackBox } from './aside-nav.style';

const AsideNav = ({ isOpen, openHandler, children }) => {
    return (
        <>
            {
                isOpen && <BlackBox onClick={openHandler} />
            }
            <AsideNavStyle status={isOpen}>{children}</AsideNavStyle>
        </>
    )
};

export default AsideNav;