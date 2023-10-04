import React from "react";

import { WithTheme } from "./with-theme";
import { WithRouter } from "./with-router";

export const WithProviders = ({ children }) => {
  return (
    <WithRouter>
      <WithTheme>{children}</WithTheme>
    </WithRouter>
  );
};
