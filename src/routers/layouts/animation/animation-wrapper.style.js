import styled from "styled-components";

export const TopWrapper = styled.div`
  position: relative;

  width: fit-content;
  height: fit-content;
`;

export const AnimationWrapperStyle = styled.div`
  width: fit-content;
  height: fit-content;
  display: ${({ isAnimated }) => (isAnimated ? "initial" : "none")};
`;

export const CenterPointer = styled.div`
  position: absolute;

  top: 400px;
  left: 50%;

  width: 50px;
  aspect-ratio: 1 / 1;
  border-radius: 50%;

  transform: translateX(-50%);

  background-color: red;
`;
