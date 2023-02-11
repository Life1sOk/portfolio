import styled from 'styled-components';

export const IconWrapContainer = styled.div`
    min-width: 80px;
    padding: 3px;
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

    @media only screen and (min-width: 500px) and (max-width: 767.98px) {
        
    };
`;

export const IconWrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color: #f1a845;

    svg {
        width: 27px;
        height: 27px;
    }

    @media only screen and (min-width: 500px) {
        svg {
            width: 35px;
            height: 35px;
        }
    };
`;

export const NameFont = styled.span`
    font-size: .8rem;
`;