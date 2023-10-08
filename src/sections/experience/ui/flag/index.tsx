import Image from "next/image";

import { FlagStyle, FlagTitle } from "./index.style";

interface IComponent {
  company: string;
}

const Flag = ({ company }: IComponent) => {
  return (
    <FlagStyle>
      <Image alt="flag" src="/icons/flag-2s-160px.svg" width={100} height={100} />
      <FlagTitle>{company}</FlagTitle>
    </FlagStyle>
  );
};

export default Flag;
