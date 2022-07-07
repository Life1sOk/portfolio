import styled from 'styled-components';

export const ResumeButton = styled.button`
    z-index: 2;
    align-items: center;
    background-clip: padding-box;
    background-color: #fa6400;
    border: 1px solid white;
    border-radius: .25rem;
    box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
    box-sizing: border-box;
    color: #fff;
    cursor: pointer;
    display: inline-flex;
    font-family: system-ui, -apple-system, system-ui, "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 16px;
    font-weight: 600;
    justify-content: center;
    height: 42px;
    padding: calc(.875rem - 1px) calc(1.5rem - 1px);
    text-decoration: none;
    transition: all 250ms;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    vertical-align: baseline;
    width: 10rem;
    transform: translateY(-1px);

    &:hover {
        background-color: #fb8332;
        box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
    }
`;

export const Type2 = styled.button`
    background: #FF4742;
    border: 1px solid #FF4742;
    border-radius: 6px;
    box-shadow: rgba(0, 0, 0, 0.1) 1px 2px 4px;
    box-sizing: border-box;
    color: #FFFFFF;
    cursor: pointer;
    display: inline-block;
    font-family: nunito, roboto, proxima-nova, "proxima nova", sans-serif;
    font-size: 16px;
    font-weight: 800;
    line-height: 16px;
    max-height: 48px;
    min-height: 40px;
    outline: 0;
    padding: 12px 14px;
    text-align: center;
    text-rendering: geometricprecision;
    text-transform: none;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    vertical-align: middle;
    width: 10rem;
    transform: translateY(-1px);

    &:hover,
    &:active {
        background-color: white;
        background-position: 0 0;
        color: #FF4742;
    }

    &:active {
        opacity: .5;
    }
`;

export const TypeMail = styled.button`
    align-items: center;
    background-color: inherit;
    border: 1px solid #FF4742;
    border-radius: .25rem;
    box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
    box-sizing: border-box;
    color: #FF4742;
    cursor: pointer;
    display: inline-flex;
    font-size: 16px;
    font-weight: 600;
    justify-content: center;
    line-height: 1.25;
    margin: 0;
    padding: calc(.875rem - 1px) calc(1.5rem - 1px);
    max-height: 48px;
    min-height: 3rem;
    text-decoration: none;
    transition: all 250ms;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    vertical-align: baseline;
    width: 10rem;

    &:hover {
        transform: translateY(-1px);
        border-color: white;
        box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
        color: white;
    }

    &:active {
        background-color: inherit;
        border-color: rgba(0, 0, 0, 0.15);
        box-shadow: rgba(0, 0, 0, 0.06) 0 2px 4px;
        color: rgba(0, 0, 0, 0.65);
        transform: translateY(0);
    }
`;

export const Github = styled.button`
    align-items: center;
    background-color: black;
    border: 1px solid black;
    border-radius: .25rem;
    box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
    box-sizing: border-box;
    color: white;
    cursor: pointer;
    display: inline-flex;
    font-size: 16px;
    font-weight: 600;
    justify-content: space-around;
    line-height: 1.25;
    margin: 0;
    padding: calc(.875rem - 1px) calc(1.5rem - 1px);
    max-height: 48px;
    min-height: 3rem;
    text-decoration: none;
    transition: all 250ms;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    vertical-align: baseline;
    width: 10rem;

    & svg {
        width: 30px;
        height: auto;
        padding: 
    }

    &:hover {
        transform: translateY(-1px);
        border: 2px solid white;
        box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
    }

    &:active {
        background-color: inherit;
        border: 2px solid black;
        ${'' /* border-color: rgba(0, 0, 0, 0.15); */}
        box-shadow: rgba(0, 0, 0, 0.06) 0 2px 4px;
        color: rgba(0, 0, 0, 0.65);
        transform: translateY(0);
    }
`;
