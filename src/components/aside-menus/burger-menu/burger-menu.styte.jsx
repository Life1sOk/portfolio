import styled from 'styled-components';

export const BurgerWord = styled.span`
    width: 70vw;
    max-width: 500px;
    padding: 15px;
    margin: 1.5rem 0;
    border: .1px solid rgba(255,255,255, .3);
    border-right: 2px solid rgba(255,255,255, .3);
    border-left: 2px solid rgba(255,255,255, .3);
    border-radius: 5px;
    font-size: 16px;
    text-transform: uppercase;
    letter-spacing: 0.5rem;
    
    &:hover {
        border: .1px solid rgba(229,95,63,1);
        border-right: 2px solid rgba(229,95,63,1);
        border-left: 2px solid rgba(229,95,63,1);
        cursor: pointer;
    };
    
    & span {
        font-size: 14px;
    };
`;

