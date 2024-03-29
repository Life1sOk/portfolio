import styled from "styled-components";

export const MobileNavbarStyle = styled.div`
  min-width: 255px;
  width: 100%;
  height: 100%;
  background-color: var(--background);

  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const TopStyle = styled.div`
  width: 100%;
  height: fit-content;

  padding: 27% 42px 0;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ToggleWrapper = styled.div`
  transform: scale(1.4);

  width: fit-content;
  height: fit-content;
`;

export const LinksWrapper = styled.div`
  width: 100%;
  height: fit-content;

  padding: 33px 22px;

  display: flex;
  flex-direction: column;
`;

export const ButtonContainer = styled.div`
  width: 100%;
  padding-bottom: 27%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LinkWord = styled.div`
  font-size: 18px;
  padding: 29px 28px;
  border-bottom: 1px solid transparent;

  display: flex;
  align-items: flex-end;
  gap: 13px;

  .link {
    color: var(--font-color);
    font-size: 22px;
  }

  .number {
    margin-right: 3px;
    color: var(--light-yellow);
  }

  &:hover {
    cursor: pointer;
    border-bottom: 1px solid rgba(255, 255, 255, 1);

    .link {
      color: var(--white);
    }
  }
`;
