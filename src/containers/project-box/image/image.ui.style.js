import styled from "styled-components";

export const ImageUiStyle = styled.div`
  height: fit-content;
  position: relative;
  grid-area: ${({ isLeftSide }) => (isLeftSide ? "1 / 1 / -1 / 8" : "1 / 6 / -1 / -1")};

  border-radius: 5px;
  overflow: hidden;

  display: flex;
  align-items: center;

  @media only screen and (max-width: 977px) {
    grid-area: ${({ isLeftSide }) => (isLeftSide ? "1 / 1 / -1 / 9" : "1 / 5 / -1 / -1")};
  }

  @media only screen and (max-width: 848px) {
    border-radius: 5px;
    grid-column: 1 / -1;
  }
`;

export const ImageCurrent = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

export const ImageFront = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;

  width: 100%;
  height: 100%;
  border-radius: 5px;
  background-color: rgba(64, 87, 143, 0.7);
  border-bottom: 2px solid white;

  transition: opacity 0.3s linear;

  &:hover {
    cursor: pointer;
    opacity: 0;
  }

  @media only screen and (max-width: 848px) {
    display: none;
  }
`;
