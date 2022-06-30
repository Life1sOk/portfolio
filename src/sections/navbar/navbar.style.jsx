import styled from 'styled-components';

export const NavbarContainer = styled.nav`
    background-color: #06223c;
    align-items: center;
    display: flex;
    flex: 0 0 auto;
    justify-content: space-between;
    padding: 5px 44px;

    & button:first-of-type {
    display: none;
    }

    & button:last-of-type {
        margin-left: auto;
    }

    @media only screen and (max-width: 1068px) {

        button:first-of-type {
            display: flex;
            order: -1;
    }

    @media only screen and (max-width: 622px) {
        button:first-of-type {
            width: auto;
        }
    }

`;

export const MyName = styled.span`
    font-size: 2.4rem;
    font-weight: bolder;
    margin-right: auto;

    @media only screen and (max-width: 1068px) {
        margin: 0;
    };

    @media only screen and (max-width: 622px) {
        font-size: 1.7rem;
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