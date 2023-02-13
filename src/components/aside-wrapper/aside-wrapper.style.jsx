import styled from "styled-components";

export const BackToCloseMenu = styled.div`
    display: ${({ open }) => open ? 'initial' : 'none'};
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: 30;
`;

export const MenuContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    height: 100%;
    width: 100%;
    min-width: 300px;
    padding: 40px 32px 32px 32px;
    position: fixed;
    background-color: rgba(0,21,40,.9);;
    top: 0;
    left: 0;
    transition: transform 0.4s ease-in-out;
    transform: ${({ open, side }) => open ? 'translateX(0)' : side === 'left' ? 'translateX(-200%)' : 'translateX(200%)'};
    z-index: 30;
`;