import styled from "styled-components";

export const LogoStyle = styled.div`
  width: 160px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;

export const WorldGlobus = styled.div`
  width: 34px;
  height: 34px;
  color: var(--light-yellow);

  animation: logoRotation 12s linear infinite;

  @keyframes logoRotation {
    from {
      transform: rotate(0);
    }

    to {
      transform: rotate(360deg);
    }
  }

  & svg {
    width: 100%;
    height: 100%;
  }
`;

export const Line = styled.div`
  width: 2px;
  height: 27px;

  background-color: var(--white);
`;

export const Name = styled.span`
  font-size: 27px;
  font-family: var(--font-logo);
  font-weight: 400;
`;
