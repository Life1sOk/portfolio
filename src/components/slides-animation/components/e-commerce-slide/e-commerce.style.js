import styled from "styled-components";

export const Top = styled.div`
    width: 100%;
    height: 10%;
    border-bottom: 1px solid white;

    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 4px;
`;

export const Middle = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Aside = styled.div`
    width: 30%;
    height: 90%;
    border-right: 1px solid white;
    padding-right: 8px;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;

export const BoxWrapper = styled.div`
    width: 70%;
    height: 90%;
    display: grid;
    grid-template-columns: repeat(2,1fr);
    grid-template-rows: repeat(3, 1fr);
    justify-items: center;
    /* align-items: center; */
    grid-row-gap: 10px;
`;

export const BoxContainer = styled.div`
    width: 60px;
    height: 52.75px;

    display: flex;
    flex-direction: column;
    gap: 6px;
`;

export const BoxContainerBot = styled.div`
    width: 100%;
    height: 18%;

    display: flex;
    gap: 6px;
`;