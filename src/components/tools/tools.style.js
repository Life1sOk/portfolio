import styled from "styled-components";

export const ToolsStyle = styled.ul`
  width: 100%;
  position: relative;
  z-index: 3;

  overflow-x: scroll;

  font-size: ${({ size }) => (size === "small" ? "12px" : "13.5px")};
  color: var(--light-yellow);
  padding: 7px 7px 7px 10px;

  display: flex;
  justify-content: ${({ isLeftSide }) => (!isLeftSide ? "flex-start" : "flex-end")};
  align-items: center;
  gap: 10px;

  @media only screen and (max-width: 848px) {
    justify-content: flex-start;
    padding: ${({ size }) => (size === "small" ? "7px 7px 7px 10px" : "7px 0")};
  }

  @media only screen and (max-width: 410px) {
    font-size: 12px;
  }

  /* width */
  ::-webkit-scrollbar {
    height: 2px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: var(--blue);
    border-radius: 10px;
  }
`;

export const OneTool = styled.li`
  /* white-space: nowrap; */
`;
