import styled from 'styled-components';

export const ProjectsContainer = styled.section`
    width: 100%;
    max-width: 1000px;
    padding: 99px 0;

    display: flex;
    flex-direction: column;
`;

export const ProjectsWrapper = styled.div`
    margin-bottom: 55px;
`;

export const TitleWrapper = styled.div`
    width: 70%;
    margin: 10px 0 44px 0;
`;

export const ProjectsSmallContainerStyle = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
`;

export const TitleSmall = styled.h2`
    margin: 22px 0 33px 0;
`;

export const ProjectsSmallWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(277px, 1fr));
    gap: 18px;
`;
