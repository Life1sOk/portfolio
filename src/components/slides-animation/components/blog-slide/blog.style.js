import styled from "styled-components";

export const Left = styled.div`
    width: 30%;
    height: 100%;
    border-right: 1px solid white;

    display: flex;
    flex-direction: column;
    /* justify-content: ; */
    gap: 17px;
`;

export const Right = styled.div`
    width: 65%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;