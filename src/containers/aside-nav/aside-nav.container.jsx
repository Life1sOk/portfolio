import React, { useEffect } from "react";

import { AsideNavStyle, BlackBox } from "./aside-nav.style";

const AsideNav = ({ isOpen, openHandler, children }) => {
  // Prevent scroll content when aside menu is open
  useEffect(() => {
    if (isOpen) {
      window.document.body.style.overflowY = "hidden";
    } else {
      window.document.body.style.overflowY = "scroll";
    }
  }, [isOpen]);

  return (
    <>
      {isOpen && <BlackBox onClick={openHandler} />}
      <AsideNavStyle status={isOpen}>{children}</AsideNavStyle>
    </>
  );
};

export default AsideNav;
