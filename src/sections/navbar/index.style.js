import styled from 'styled-components';

export const NavigationWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;

    width: 100%;
    min-width: 320px;

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
`;

export const NavigationContainer = styled.nav`
    min-width: 320px;
    max-width: 1299.98px;
    width: 100%;
    height: 65.5px;
    margin: 0 auto;
    background-color: var(--background);
    padding: 0 44px;

    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0;
`;

export const LogoStyle = styled.img`
    width: 160px;

    @media only screen and (max-width: 799px) {
        width: 130px;
    };
`;

export const BurgerWrapper = styled.div`
    display: none;

    @media only screen and (max-width: 799px) {
        display: initial;
        position: relative;
        z-index: 10;
    };
`;

export const NavWrapper = styled.div`
    display: initial;

    @media only screen and (max-width: 799px) {
        display: none;
    };
`;

export const NavbarAsideWrapper = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 8;

    width: 100vw;
    height: 100vh;
    background: rgba(0,0,0, .5);

    display: flex;
    justify-content: flex-end;
    
    @media only screen and (min-width: 799px) {
        display: none;
    };
`;