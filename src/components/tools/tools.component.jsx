import React from "react";

import { ToolsStyle, OneTool } from "./tools.style";

const Tools = ({ tools, size, isLeftSide }) => {
  return (
    <ToolsStyle size={size} isLeftSide={isLeftSide}>
      {tools.map((tool, index) => (
        <OneTool key={index}>{tool}</OneTool>
      ))}
    </ToolsStyle>
  );
};

export default Tools;
