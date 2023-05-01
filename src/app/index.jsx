import React from "react";

import { HashRouter } from "react-router-dom";

import Routing from "../routers";

import "./i18n/index";
import "./index.css";

const App = () => {
  return (
    <HashRouter>
      <Routing />
    </HashRouter>
  );
};

export default App;
