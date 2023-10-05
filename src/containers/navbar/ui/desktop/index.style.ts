import styled from "styled-components";

export const DesktopNavbarStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DesktopNavbarSide = styled.div`
  margin-left: 12px;
  font-size: 14px;

  display: flex;
  align-items: center;
  gap: 23px;
`;

export const LinkWrapper = styled.p`
  font-size: 11px;
  padding: 5px 5px 8px 5px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  margin-right: 22px;

  .link {
    font-size: 11.5px;
    color: var(--font-color);
    font-family: var(--font-main);
    font-weight: 600;
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
