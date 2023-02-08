import styled from 'styled-components';

export const SkillsContainer = styled.section`
    display: flex;
    flex-direction: column;
    min-width: 300px;
    padding: 30px;

    @media only screen and (max-width: 870px) {
        padding: 30px 0 30px 0;
    }
`;

export const Title = styled.span`
    color: #0b3a66;
    font-size: 1.7rem;
`;

export const MainSkills = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    @media only screen and (max-width: 940px) {
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

    ${'' /* @media only screen and (max-width: 485px) {
        display: grid;
        max-width: 300px;
        row-gap: 7px;
        align-items: center;
        justify-items: center;
        grid-template-columns: repeat(2, 1fr);
    } */}

    @media only screen and (max-width: 400px) {
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
        display: grid;
        max-width: 300px;
        row-gap: 7px;
        align-items: center;
        justify-items: center;
        grid-template-columns: repeat(2, 1fr);
    }
`;