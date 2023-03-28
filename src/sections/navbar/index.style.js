import styled from 'styled-components';

export const NavigationWrapper = styled.div`
    position: sticky;
    top: 0;
    left: 0;

    width: 100%;
    min-width: 320px;

    animation-name: animationNav;
    animation-duration: .5s;
    animation-direction: alternate;

    @keyframes animationNav {
        from {
            transform: translateY(-100%);
        }

        to {
            transform: translateY(0);
        }
    };
`;

export const NavigationContainer = styled.nav`
    position: relative;
    z-index: 10;

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

    @media only screen and (max-width: 599px) {
       padding: 0 22px;
    };
`;

export const LogoStyle = styled.img`
    width: 160px;

    @media only screen and (max-width: 848px) {
        width: 130px;
        position: relative;
        z-index: 105;
    };
`;

export const BurgerWrapper = styled.div`
    display: none;

    @media only screen and (max-width: 848px) {
        display: initial;
        position: relative;
        z-index: 105;
    };
`;

export const NavWrapper = styled.div`
    display: initial;

    @media only screen and (max-width: 848px) {
        display: none;
    };
`;