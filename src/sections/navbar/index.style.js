import styled from 'styled-components';

export const NavigationContainer = styled.nav`
    position: fixed;
    top: 0;
    left: 0;

    min-width: 320px;
    width: 100%;
    height: 65.5px;
    /* background-color: rgba(0, 21, 40, .8); */
    background-color: var(--background);
    padding: 0px 22px;
    z-index: 20;

    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0;

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

export const LogoStyle = styled.img`
    width: 120px;
    height: 25.13px;

    @media only screen and (min-width: 992px) {
        width: 160px;
        height: 33.52px;
    };
`;

export const SmallSideContainer = styled.div`

    @media only screen and (min-width: 992px) {
        display: none;
    };
`;

export const SideContainer = styled.div`
    display: none;
    width: fit-content;
    height: 100%;

    @media only screen and (min-width: 992px) {
        display: flex;
        gap: 30px;
        align-items: center;
    };
`;