import styled from 'styled-components';

export const IconWrapContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 100px;
    ${'' /* border: 3px solid #0b3a66; */}
    border-radius: 30%;
    background-color: #0b3a66;

    @media only screen and (max-width: 485px) {
        width: 90px;
        height: 90px;
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

`;
