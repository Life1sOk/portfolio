import styled from 'styled-components';

export const FooterContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #06223c;
    border: 1px solid #06223c;
    min-width: 300px;
`;

export const TopFooterContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 350px;

    & .top-footer-left {
        width: 300px;
    }

    @media only screen and (max-width: 1068px) {
        justify-content: space-between;
        width: 100%;
        padding: 0 30px;
        gap: 0px;
    }

    @media only screen and (max-width: 760px) {
        justify-content: center;
        white-space: nowrap;
        max-width: 600px;

        & .top-footer-left {
            display: none; 
        }
    }
`;

export const BotFooterContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 350px;
`;

export const FooterNav = styled.div`
    display: flex;
    justify-content: center;
    gap: 50px;
    width: 300px;


    @media only screen and (max-width: 1068px) {
        display: none;
    }
`;

export const ContactIconWrap = styled.div`
    display: flex;
    justify-content: center;
    width: 370px;

    @media only screen and (max-width: 400px) {
        width: auto;
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