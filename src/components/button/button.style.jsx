import styled from 'styled-components';

export const TypeMail = styled.button`
    width: 160px;
    align-items: center;
    background-color: inherit;
    border: 1.7px solid #FF4742;
    border-radius: 8px;
    color: #FF4742;
    font-size: 16px;
    font-weight: 600;
    padding: calc(.875rem - 1px) calc(1.5rem - 1px);
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    vertical-align: baseline;
    transition: all 250ms;

    &:hover {
        cursor: pointer;
        border-color: white;
        color: white;
    };

    &:active {
        opacity: .5;
    };

    @media only screen and (max-width: 1068px) {
        display: flex;
        width: auto;
        padding: 10px 15px;
    };
`;

export const TypeProjects = styled.button`
    width: 160px;
    align-items: center;
    background-color: inherit;
    border: 1.7px solid #FF4742;
    border-radius: 8px;
    color: #FF4742;
    font-size: 16px;
    font-weight: 600;
    padding: calc(.875rem - 1px) calc(1.5rem - 1px);
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    vertical-align: baseline;
    transition: all 250ms;

    &:hover {
        cursor: pointer;
        border-color: white;
        color: white;
    };

    &:active {
        opacity: .5;
    };

    @media only screen and (max-width: 1068px) {
        display: flex;
        width: auto;
        padding: 10px 15px;
    };
`;