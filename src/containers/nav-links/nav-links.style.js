import styled from "styled-components";

export const NavLinksContainer = styled.ol`
    display: flex;
    flex-direction: ${({ isAside }) => isAside ? 'column' : 'row'};
    align-items: center;
    justify-content: center;
    gap: 22px;

    ${({ isAside }) => isAside ? `
        min-width: 299px;
        width: min(75vw, 400px);
        height: 100%;
        background-color: var(--background);
    `: null};
`;

export const SideContainer = styled.div`
   width: 111px;
   height: 44px;

   display: flex;
   gap: 30px;
   align-items: center;
`;


export const LinkWords = styled.li`

    .number {
        margin-right: 3px;
        color: var(--light-yellow);
    }

    ${({ isAside }) => isAside ? `
        min-width: 255px;

        font-size: 18px;
        padding: 10px;

        display: flex;
        flex-direction: column;
        gap: 5px;

        .link {
            color: var(--font-color);
            font-size: 22px;
        }
    `: `
        font-size: 13px;
        padding: 5px 5px 8px 5px;
        border-bottom: 1px solid rgba(255,255,255,.2);

        .link {
            color: var(--font-color);
        }
    `};

    :hover {
        cursor: pointer;
        border-bottom: 1px solid rgba(255,255,255,1);

        .link {
            color: var(--white);
        }
    }
`;