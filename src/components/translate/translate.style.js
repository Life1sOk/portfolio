import styled from "styled-components";

export const TranslateStyle = styled.div`
  width: ${({ type }) => (type === "row" ? "255px" : "fit-content")};
  height: 100%;
  max-height: 44px;

  display: flex;
  flex-direction: ${({ type }) => (type ? type : "row")};
  justify-content: space-between;
`;

export const Picker = styled.button`
  border: none;
  background-color: transparent;
  padding: 3px;

  font-family: var(--font-main);
  font-size: 12px;

  color: ${({ state }) =>
    state ? "var(--light-yellow)" : "var(--font-color)"};

  &:hover {
    cursor: pointer;
    opacity: ${({ state }) => (state ? "1" : ".8")};
  }
`;
