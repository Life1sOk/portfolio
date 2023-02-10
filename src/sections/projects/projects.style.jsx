import styled from 'styled-components';

export const ProjectsContainer = styled.section`
    /* background-color: white; */
    color: #0b3a66;
    display: flex;
    ${'' /* flex-direction: column; */}
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 50px;
    min-width: 300px;
    /* max-width: 1280px; */
    height: 100vh;
    margin: 0 auto;

    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Checker = styled.a`
    background-color: yellow;
    width: 100px;
    height: 100px;
`;