import styled from "styled-components";

export const IconSocialStyle = styled.a<{ size?: string; type?: string }>`
  width: fit-content;
  height: fit-content;

  padding: 7px;
  color: var(--font-color);
  color: ${({ type }) => (type === "white" ? "var(--white)" : "var(--font-color)")};

  display: flex;
  align-items: center;
  justify-content: center;

  & svg {
    width: ${({ size }) =>
      size === "small" ? "20px" : size === "normal" ? "24px" : "24px"};
    height: ${({ size }) =>
      size === "small" ? "20px" : size === "normal" ? "24px" : "24px"};
  }

  &:hover {
    color: var(--blue);
  }
`;
