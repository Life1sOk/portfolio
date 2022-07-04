import styled from 'styled-components';

export const SkillsContainer = styled.section`
    display: flex;
    flex-direction: column;
    min-width: 400px;
`;

export const H2 = styled.h2`
    padding-top: 30px;
    color: #0b3a66;
    font-size: 1.7rem;
`;

export const MainSkills = styled.div`
    display: flex;
    justify-content: center;
    padding: 0 20px 30px 20px;

    @media only screen and (max-width: 870px) {
        flex-direction: column;
        padding: 0 0 30px 0;
    }
`;

export const Basics = styled.div`
    display: flex;
    justify-content: center;
    padding: 20px 10px;
    column-gap: 20px;

    @media only screen and (max-width: 485px) {
        column-gap: 7px;
    }
`;

export const Advanced = styled.div`
    display: flex;
    justify-content: center;
    padding: 20px 10px;
    column-gap: 20px;

    @media only screen and (max-width: 485px) {
        column-gap: 7px;
    }
`;