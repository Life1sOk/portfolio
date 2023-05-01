import styled from "styled-components";

export const SmallBoxStyle = styled.div`
  width: 100%;
  height: fit-content;
  background-color: var(--background-secondary);
  border-radius: 10px;
  padding: 10px;
`;

export const BoxTop = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LinksMain = styled.div`
  display: flex;
`;

export const LinkWrapper = styled.a`
  width: 40px;
  aspect-ratio: 1/1;
  padding: 10px;

  & svg {
    width: 100%;
    height: 100%;
  }
`;

export const FolderIcon = styled.div`
  width: 66px;
  aspect-ratio: 1/1;
  padding: 11px;

  & svg {
    width: 100%;
    height: 100%;
  }
`;

export const Title = styled.h3`
  text-align: left;
  padding: 10px 0 10px 10px;
`;

export const Description = styled.p`
  height: 125px;

  overflow: scroll;

  font-size: 14px;
  color: var(--font-color);
  padding: 10px 0 10px 10px;
  text-align: left;
  line-height: 1.5;
`;

export const Tools = styled.ul`
  width: 100%;

  font-size: 14px;
  color: var(--light-yellow);
  margin: 7px 0;
  overflow-x: scroll;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  & li {
    margin: 0 0 15px 10px;
    white-space: nowrap;
  }
`;
