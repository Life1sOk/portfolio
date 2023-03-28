import styled from 'styled-components';

export const IconWrapContainer = styled.div`
    width: 85px;
    height: 85px;
    padding: 15px 10px 10px 10px;
    border-radius: 5px;
    background-color: var(--background-secondary);

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    box-shadow: 0px 0px 20px 1px rgba(0,0,0,0.75);
    -webkit-box-shadow: 0px 0px 20px 1px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 0px 20px 1px rgba(0,0,0,0.75);

    animation-name: zero;
    animation-duration: ${({ time }) => time ? `${time}s` : '2s'};

    @keyframes zero {
        from {
            transform: scale(0);
        }
        to {
            transform: scale(1);
        }
    };
`;

export const IconWrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--font-color);

    svg {
        width: 27px;
        height: 27px;
    }

    /* @media only screen and (min-width: 500px) {
        svg {
            width: 35px;
            height: 35px;
        }
    }; */
`;

export const NameFont = styled.span`
    font-size: 14px;
    color: var(--font-color);
`;