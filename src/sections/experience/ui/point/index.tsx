import { FlagStyle } from "./index.style";

import Flag from "../flag";
import Cloud from "../cloud";

interface IComponent {
  company: string;
  position: string;
  start: string;
  end: string;
}

const Point = ({ data }: { data: IComponent }) => {
  const { company, position, start, end } = data;

  return (
    <FlagStyle>
      <Cloud position={position} start={start} end={end} />
      <Flag company={company} />
    </FlagStyle>
  );
};

export default Point;
