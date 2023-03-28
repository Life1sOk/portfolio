import styled from "styled-components";

export const HomeContainer = styled.div`
    width: 100%;
    height: 100%;
    max-width: 1299.98px;
    min-width: 320px;
    margin: 0 auto;
    padding: 0 100px;
    overflow: hidden;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media only screen and (max-width: 599px) {
        padding: 0 55px 0 55px;
    };
`;