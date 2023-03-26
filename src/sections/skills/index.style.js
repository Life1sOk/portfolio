import styled from "styled-components";

export const MainWrapper = styled.div`
    padding: 99px 22px;
    width: 90%;

    display: flex;
    align-items: center;
    justify-content: space-around;

    @media only screen and (max-width: 1029px) {
        width: 100%;
    };
`;

export const MainSkills = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 22px;

    @media only screen and (max-width: 798px) {
        width: 100%;
        max-width: 521px;
        padding: 10px 20px 20px 30px;
    };
`;

export const TitleWrapper = styled.div`
    width: 100%;
`;

export const BoxWrapper = styled.div`

    @media only screen and (max-width: 798px) {
        display: none;
    };
`;