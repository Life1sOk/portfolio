import styled from "styled-components";

export const SkillSetStyle = styled.div`
    max-width: 400px;
    width: 90%;
    padding: 20px 0px 0px 0px;
    border-radius: 10px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

export const BasicsContainer = styled.div`
    width: 100%;
    margin: 20px 0;

    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 20px;
    flex-wrap: wrap;
`;

export const FrameworksContainer = styled.div`
    width: 100%;
    padding: 20px 0px;
    border-top: 1px solid grey;
    border-bottom: 1px solid grey;

    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    gap: 20px;
`;