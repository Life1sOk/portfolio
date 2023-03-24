import styled from "styled-components";

export const ParagraphStyle = styled.p`
    color: var(--font-color);
    font-family: "Calibre","Inter","San Francisco","SF Pro Text",-apple-system,system-ui,sans-serif;
    text-align: ${({ side }) => side ? side : 'left'};
`;