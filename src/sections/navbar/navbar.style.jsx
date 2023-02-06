import styled from 'styled-components';

export const NavigationContainer = styled.nav`
    position: relative;
    width: 100%;
    background-color: #001528;
    padding: 14px 44px;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 200px;

    box-shadow: 0px 10px 8px 0px rgba(0,0,0,0.77);
    -webkit-box-shadow: 0px 10px 8px 0px rgba(0,0,0,0.77);
    -moz-box-shadow: 0px 10px 8px 0px rgba(0,0,0,0.77);

    @media only screen and (max-width: 1290px) {
        justify-content: space-between;
        gap: 0;
    }

    @media only screen and (max-width: 544px) {
        padding: 14px 22px;
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
    font-size: 14px;
    padding: 5px;
    border-bottom: 2px solid #06223c;

    &:hover {
        cursor: pointer;
        color: white;
        border-bottom: 2px solid white;
    }
`;

export const LogoStyle = styled.img`
    /* position: absolute;
    top: 0;
    left: 60px; */

    max-width: 160px;
`;