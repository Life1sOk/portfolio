import styled from 'styled-components';

export const SkillsContainer = styled.section`
    display: flex;
    flex-direction: column;
    min-width: 400px;
    padding: 30px;

    @media only screen and (max-width: 870px) {
        padding: 30px 0 30px 0;
    }
`;

export const H2 = styled.h2`
    color: #0b3a66;
    font-size: 1.7rem;
`;

export const MainSkills = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    @media only screen and (max-width: 870px) {
        flex-direction: column;
    }
`;

export const Basics = styled.div`
    display: flex;
    justify-content: center;
    width: 360px;
    padding: 20px 10px;
    column-gap: 20px;
    border-bottom: 2px solid #0b3a66;

    @media only screen and (max-width: 485px) {
        width: 300px;
        column-gap: 7px;
    }
`;

export const Advanced = styled.div`
    display: flex;
    justify-content: center;
    width: 480px;
    padding: 20px 10px;
    column-gap: 20px;
    border-bottom: 2px solid #0b3a66;

    @media only screen and (max-width: 485px) {
        width: 400px;
        column-gap: 7px;
    }
`;