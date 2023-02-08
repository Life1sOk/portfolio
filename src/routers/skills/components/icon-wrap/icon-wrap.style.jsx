import styled from 'styled-components';

export const IconWrapContainer = styled.div`
    min-width: 100px;
    /* height: 100px; */
    padding: 10px;
    background-color: rgba(11, 58, 102, .3);
    border: 1px solid white;
    border-radius: 20px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5px;

    animation-name: zero;
    animation-duration: ${({time}) => time ? `${time}s` : '2s'};

    @keyframes zero {
        from {
            transform: scale(0);
        }
        to {
            transform: scale(1);
        }
    };

    @media only screen and (max-width: 485px) {

    }
`;

export const IconWrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color: #f1a845;

    svg {
        width: 35px;
        height: 35px;
    }
`;

export const NameFont = styled.span`
    font-size: 14px;
`;