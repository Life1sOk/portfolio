import styled from "styled-components";

export const TranslateStyle = styled.div`
  width: fit-content;
  height: 100%;
  max-height: 44px;

  display: flex;
  flex-direction: ${({ type }) => (type ? type : "row")};
  justify-content: space-around;
  gap: ${({ type }) => (type === "row" ? "15px" : "0")};
`;

export const Picker = styled.p`
  border: none;
  background-color: transparent;
  width: ${({ type }) => (type === "row" ? "55px" : "fit-content")};
  padding: ${({ type }) => (type === "row" ? "5px" : "3px")};

  font-family: var(--font-main);
  font-size: ${({ type }) => (type === "row" ? "22px" : "12px")};

  color: ${({ state }) => (state ? "var(--light-yellow)" : "var(--font-color)")};

  &:hover {
    cursor: pointer;
    opacity: ${({ state }) => (state ? "1" : ".8")};
  }
`;
