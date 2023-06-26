import styled from "styled-components";

export const SmallBoxStyle = styled.div`
  width: 100%;
  height: 100%;
  max-width: 371.55px;
  background-color: var(--background-secondary);
  border-radius: 10px;
  padding: 10px;
`;

export const BoxTop = styled.div`
  width: 100%;
  height: 51px;

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
  width: 55px;
  padding: 0 11px;

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
  height: 88px;

  overflow-y: scroll;

  font-family: var(--font-secondary);
  font-size: 14px;
  color: var(--font-color);
  margin: 5px 0 5px 10px;
  padding-right: 10px;
  text-align: left;
  line-height: 1.5;

  /* width */
  ::-webkit-scrollbar {
    width: 2px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: var(--blue);
    border-radius: 10px;
  }
`;

export const Tools = styled.ul`
  width: 100%;

  overflow-x: scroll;

  font-size: 12px;
  color: var(--light-yellow);
  margin: 7px 10px 0 0;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  & li {
    margin: 0 0 10px 10px;
    white-space: nowrap;
  }

  /* width */
  ::-webkit-scrollbar {
    height: 2px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: var(--blue);
    border-radius: 10px;
  }
`;
