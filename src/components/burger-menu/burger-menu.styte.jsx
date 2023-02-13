import styled from 'styled-components';

export const BackToCloseMenu = styled.div`
    display: ${({ open }) => open ? 'initial' : 'none'};
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: 3;
`;

export const BurgerMenuContainer = styled.div`
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
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-200%)'};
    z-index: 3;
`;

export const BurgerWord = styled.span`
    width: 70vw;
    padding: 15px;
    margin: 1.5rem 0;
    border-right: 2px solid rgba(255,255,255, .3);
    border-left: 2px solid rgba(255,255,255, .3);
    border-radius: 5px;
    font-size: 1rem;
    text-transform: uppercase;
    letter-spacing: 0.5rem;
    
    &:hover {
        border-right: 2px solid rgba(229,95,63,1);
        border-left: 2px solid rgba(229,95,63,1);
        cursor: pointer;
    };
    
    & span {
        font-size: 14px;
    };
`;

