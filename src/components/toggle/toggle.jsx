import React from "react";

import { TbSunHigh, TbMoon } from "react-icons/tb";

import { ToggleStyle, InputStyle, LabelStyle } from "./toggle.style";

const Toggle = () => {
  return (
    <ToggleStyle>
      <InputStyle checked type="checkbox" name="mode" id="darkmode-toggle" />
      <LabelStyle htmlFor="darkmode-toggle">
        <TbSunHigh title="sun" className="sun" />
        <TbMoon title="moon" className="moon" />
      </LabelStyle>
    </ToggleStyle>
  );
};

export default Toggle;
