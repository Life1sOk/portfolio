import styled from 'styled-components';

export const NavigationContainer = styled.nav`
    position: fixed;
    top: 0;
    left: 0;

    min-width: 320px;
    width: 100%;
    height: 65.5px;
    background-color: rgba(0, 21, 40, .8);
    padding: 0px 22px;
    z-index: 200;

    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0;

    box-shadow: 0px 10px 8px 0px rgba(0,0,0,0.77);
    -webkit-box-shadow: 0px 10px 20px 0px rgba(0,0,0,0.77);
    -moz-box-shadow: 0px 10px 8px 0px rgba(0,0,0,0.77);

    animation-name: animationNav;
    animation-duration: 1.3s;
    animation-direction: alternate;

    @keyframes animationNav {
        from {
            transform: translateY(-100px);
        }
        to {
            transform: translateY(0);
        }
    };

    @media only screen and (min-width: 992px) {
        padding: 0 44px;
    };

    @media only screen and (min-width: 1399.9px) {
        justify-content: center;
        gap: 270px;
    };
`;

export const NavbarMenu = styled.section`
    display: none;
    width: 26rem;


    @media only screen and (min-width: 992px) {
        display: flex;
        justify-content: space-around;
    };
`;

export const LogoStyle = styled.img`
    width: 75%;
    max-width: 160px;

    @media only screen and (min-width: 992px) {
        width: 100%;
    };
`;

export const SideContainer = styled.div`
    width: fit-content;
    height: 100%;

    display: flex;
    gap: 30px;
    align-items: center;
`;