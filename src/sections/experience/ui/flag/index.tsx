import Image from "next/image";

import { FlagStyle, FlagTitle } from "./index.style";

interface IComponent {
  company: string;
  color?: string;
  src?: string;
}

const Flag = ({ company, color, src }: IComponent) => {
  return (
    <FlagStyle color={color}>
      <Image alt="flag" src={src ? src : "/icons/study.gif"} width={100} height={100} />
      <FlagTitle>{company}</FlagTitle>
    </FlagStyle>
  );
};

export default Flag;
