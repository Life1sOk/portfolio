import styled from 'styled-components';

export const ProjectsContainer = styled.section`
    width: 100%;
    height: calc(var(--vh, 1vh) * 100 - 65.5px);
    max-width: 1299.98px;
    min-width: 320px;
    margin: 0 auto;

    display: flex;
    justify-content: center;
    align-items: center;

    @media only screen and (min-width: 1049.98px) {
        height: 100%;
        min-height: calc(100vh - 65.5px);
        justify-content: space-around;
    };
`;