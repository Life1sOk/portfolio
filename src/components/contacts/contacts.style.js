import styled from "styled-components";

export const ContactsContainer = styled.div`
    /* height: 50%; */
    justify-content: space-between;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${({gap}) => gap ? gap : '15px'};
`;

export const SocialLine = styled.div`
    width: 100%;
    max-width: 120px;
    padding: 5px;
    border-right: 2px solid rgba(255,255,255, .3);
    border-left: 2px solid rgba(255,255,255, .3);
    border-radius: 5px;

    display: flex;
    align-items: center;

    &:hover {
        border-right: 2px solid rgba(229,95,63,1);
        border-left: 2px solid rgba(229,95,63,1);
        cursor: pointer;
    };

    & span {
        font-size: 14px;
    };
`;

export const IconWrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
        display: inline-block;
        width: 20px;
        height: 20px;
        margin-right: 10px;
    };
`;

export const BasicInfo = styled.div`
    width: 100%;
    padding-top: 8px;
    border-top: 1px solid white;
    font-size: 12px;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
`;