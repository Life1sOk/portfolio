import styled from "styled-components";

export const CloudStyle = styled.div`
  width: 100%;
  height: fit-content;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const MainWrapper = styled.div`
  width: 100%;
  height: fit-content;

  padding: 13px 16px;
  background-color: var(--background-secondary);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: rgba(0, 0, 0, 0.1) 0px 3px 8px;

  display: flex;
  flex-direction: column;
  gap: 8px;

  @keyframes cloudAnimation {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(-5px);
    }
  }

  & .infinit {
    font-size: 14px;
    font-weight: 600;
    color: green;
  }
`;

export const CloudSmall = styled.div`
  width: 16%;
  height: 10px;

  background-color: var(--background-secondary);
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 3px 8px;
  border: 1px solid rgba(255, 255, 255, 0.1);

  animation-name: cloudAnimation;
  animation-duration: 1s;
  animation-direction: alternate;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
`;

export const CloudBall = styled.div`
  width: 4.5%;
  aspect-ratio: 1 / 1;

  background-color: var(--background-secondary);
  border-radius: 50%;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 3px 8px;
  border: 1px solid rgba(255, 255, 255, 0.1);

  animation-name: cloudAnimation;
  animation-duration: 1s;
  animation-delay: 0.3s;
  animation-direction: alternate;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
`;
