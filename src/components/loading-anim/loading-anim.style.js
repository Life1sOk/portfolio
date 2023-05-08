import styled from "styled-components";

export const LoadingAnimStyle = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 25;

  width: 100vw;
  height: 100vh;
  background-color: #001528;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LogoWrapper = styled.div`
  animation: showLogo 2s ease-in-out;

  @keyframes showLogo {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }
`;
