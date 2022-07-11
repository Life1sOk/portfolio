import styled from 'styled-components';

export const IconWrapContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 100px;
    border-radius: 30%;
    background-color: #0b3a66;

    @media only screen and (max-width: 485px) {
        width: 80px;
        height: 80px;

        & span {
            font-size: 0.9rem;
        }
    }
`;

export const IconWrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
    width: 50px;

    & img {
        width: 100%;
    }

    @media only screen and (max-width: 485px) {
        width: 40px;
    }
`;
