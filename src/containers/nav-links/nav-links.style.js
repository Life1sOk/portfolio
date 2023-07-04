import styled from "styled-components";

export const NavLinksContainer = styled.div`
  display: flex;
  flex-direction: ${({ isAside }) => (isAside ? "column" : "row")};
  align-items: center;
  justify-content: center;

  ${({ isAside }) =>
    isAside
      ? `
        min-width: 299px;
        width: 100%;
        height: 100%;
        background-color: var(--background);

        gap: 22px;
    `
      : null};
`;

export const SideContainer = styled.div`
  width: 111px;
  height: 44px;
  margin: 0 27px 0 12px;

  font-size: 14px;
`;

export const LinkWords = styled.span`
  .number {
    margin-right: 3px;
    color: var(--light-yellow);
  }

  ${({ isAside }) =>
    isAside
      ? `
        min-width: 255px;

        font-size: 18px;
        padding: 10px;
        border-bottom: 1px solid transparent;

        display: flex;
        flex-direction: column;
        gap: 5px;

        .link {
            color: var(--font-color);
            font-size: 22px;
        }
    `
      : `
        font-size: 11px;
        padding: 5px 5px 8px 5px;
        border-bottom: 1px solid rgba(255,255,255,.2);
        margin-right: 22px;

        .link {
            font-size: 13px;
            color: var(--font-color);
        }
    `};

  :hover {
    cursor: pointer;
    border-bottom: 1px solid rgba(255, 255, 255, 1);

    .link {
      color: var(--white);
    }
  }
`;
