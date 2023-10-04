import React from "react";

import { HashRouter, BrowserRouter } from "react-router-dom";

export const WithRouter = ({ children }) => {
  return <HashRouter basename="/">{children}</HashRouter>;
};
