import styled from 'styled-components';

export const NavbarContainer = styled.div`
    background-color: #06223c;
    align-items: center;
    display: flex;
    flex: 0 0 auto;
    justify-content: center;
    column-gap: 160px;
    padding: 5px 44px;
    min-width: 300px;
    white-space: nowrap;

    & .burger {
        display: none;
    }

    & a button:first-child {
        display: initial;
    }

    & a button:last-child {
        display: none;
    }



    @media only screen and (max-width: 1068px) {
        justify-content: space-between;
        position: sticky;
        top: 0;
        z-index: 4;

        & .burger {
            display: flex;
            width: 10rem;
            order: -1;
        }
    }

    @media only screen and (max-width: 880px) {
        justify-content: space-between;
        column-gap: 0px;

        & .burger {
            width: 120px;
        }

        & a button:first-child {
            width: 120px;
            min-width: 80px;
        }
    }

    @media only screen and (max-width: 760px) {

        & .burger {
            width: 48px;
        }

        & a button:first-child {
            display: none;
        }

        & a button:last-child {
            display: initial;
            width: 3rem;
            height: 3rem;
            padding: 0;
        }
    }

    @media only screen and (max-width: 760px) {
        padding: 5px 20px;
    }

`;

export const NavbarMenu = styled.section`
    display: flex;
    justify-content: space-around;
    width: 26rem;

    @media only screen and (max-width: 1068px) {
        display: none;
    }
`;

export const NavbarWords = styled.span`
    font-size: 1rem;
    padding: 5px;
    border: 2px solid #06223c;
    cursor: pointer;

    &:hover {
        color: white;
        border-bottom: 2px solid white;
    }
`;

export const MyName = styled.span`
    font-size: 2.5rem;
    font-weight: bolder;
    cursor: pointer;

    @media only screen and (max-width: 1068px) {
        margin: 0;
    };

    @media only screen and (max-width: 760px) {
        font-size: 1.9rem;
    }
`;