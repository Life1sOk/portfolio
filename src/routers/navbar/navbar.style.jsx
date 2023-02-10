import styled from 'styled-components';

export const NavigationContainer = styled.nav`
    position: fixed;
    top: 0;
    width: 100%;
    height: 65.5px;
    min-width: 370px;
    /* background-color: #00192f; */
    background-color: rgba(0, 21, 40, .8);
    padding: 0 44px;
    z-index: 200;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 200px;

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

    @media only screen and (max-width: 1290px) {
        justify-content: space-between;
        gap: 0;
    };

    @media only screen and (max-width: 544px) {
        padding: 14px 22px;
    };
`;

export const NavbarMenu = styled.section`
    display: flex;
    justify-content: space-around;
    width: 26rem;

    @media only screen and (max-width: 1068px) {
        display: none;
    }
`;

export const LogoStyle = styled.img`
    width: 100%;
    max-width: 160px;
`;

export const SideContainer = styled.div`
    width: 200px;
    height: 100%;

    display: flex;
    gap: 30px;
    align-items: center;
    /* justify-content: center; */
`;