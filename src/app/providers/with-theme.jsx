import React from "react";

import { ThemeProvider } from "styled-components";

export const WithTheme = ({ children }) => {
  let activeTheme = {};

  return <ThemeProvider theme={activeTheme}>{children}</ThemeProvider>;
};
