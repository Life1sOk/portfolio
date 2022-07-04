import styled from 'styled-components';

export const NavbarContainer = styled.nav`
    background-color: #06223c;
    align-items: center;
    display: flex;
    flex: 0 0 auto;
    justify-content: center;
    column-gap: 160px;
    padding: 5px 44px;
    min-width: 400px;
    white-space: nowrap;

    & button:nth-of-type(1) {
        display: none;
    }

    & button:nth-of-type(3) {
        display: none;
    }

    @media only screen and (max-width: 1068px) {
        justify-content: space-between;
        position: sticky;
        top: 0;
        z-index: 4;

        button:nth-of-type(1) {
            display: flex;
            width: 10rem;
            order: -1;
        }
    }

    @media only screen and (max-width: 760px) {
        justify-content: space-between;
        column-gap: 0px;

        button:nth-of-type(1) {
            width: 3rem;
        }

        button:nth-of-type(2) {
            display: none;
        }

        button:nth-of-type(3) {
            display: initial;
            width: 3rem;
            height: 3rem;
            padding: 0;
        }
    }

`;

export const MyName = styled.span`
    font-size: 2.4rem;
    font-weight: bolder;

    @media only screen and (max-width: 1068px) {
        margin: 0;
    };

    @media only screen and (max-width: 760px) {
        font-size: 1.9rem;
    }
`;

export const NavbarMenu = styled.section`
    display: flex;
    justify-content: space-around;
    width: 26rem;
    z-index: 3;

    @media only screen and (max-width: 1068px) {
        display: none;
    }
`;