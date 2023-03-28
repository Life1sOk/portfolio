import styled from "styled-components";

export const SkillSetStyle = styled.div`
    max-width: 400px;
    width: 90%;
    border-radius: 10px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

export const BasicsContainer = styled.div`
    width: 100%;
    padding: 20px 0;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 22px;
    flex-wrap: wrap;
`;

export const FrameworksContainer = styled(BasicsContainer)`
    border-top: 1px solid var(--blue);
    border-bottom: 1px solid var(--blue);
`;