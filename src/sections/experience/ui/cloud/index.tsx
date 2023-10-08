import Space from "@components/shared/space";

import { CloudStyle, MainWrapper, CloudSmall, CloudBall, Position } from "./index.style";

interface IComponent {
  position: string;
  start: string;
  end: string;
}

const Cloud = ({ position, start, end }: IComponent) => {
  return (
    <CloudStyle>
      <MainWrapper>
        <Space title="Position:" desc={<span>{position}</span>} />
        <Space title="Start:" desc={<span>{start}</span>} />
        <Space title="End:" desc={<span>{end}</span>} />
      </MainWrapper>
      <CloudSmall />
      <CloudBall />
    </CloudStyle>
  );
};

export default Cloud;
