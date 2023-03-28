import React from "react";

import { AsideNavStyle, BlackBox } from './aside-nav.style';

const AsideNav = ({ isOpen, openHandler, children }) => {
    return (
        <>
            <AsideNavStyle status={isOpen}>{children}</AsideNavStyle>
            {
                isOpen && <BlackBox onClick={openHandler} />
            }
        </>
    )
};

export default AsideNav;