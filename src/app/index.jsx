import React from "react";

import Routing from "../routers";

import { WithProviders } from "./providers";
import { GlobalStyle } from "./styles";

import "./i18n/index";

const App = () => {
  return (
    <WithProviders>
      <GlobalStyle />
      <Routing />
    </WithProviders>
  );
};

export default App;
