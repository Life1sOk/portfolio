import styled from "styled-components";

export const AsideNavStyle = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 101;

  width: 100vw;
  height: 100vh;

  transform: ${({ status }) => (!status ? "translateX(100%)" : "translateX(0)")};
  transition: transform 0.4s ease-in-out;

  @media only screen and (min-width: 474px) {
    width: min(75vw, 400px);
  }

  @media only screen and (min-width: 1045px) {
    display: none;
  }
`;

export const BlackBox = styled.div`
  position: fixed;
  top: 0;
  right: 0;

  width: 100vw;
  height: 100vh;
  background-color: black;
  opacity: 0.4;
  z-index: 26;

  @media only screen and (min-width: 1045px) {
    display: none;
  }
`;
