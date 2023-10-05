import { TitleStyle, TitleNumber } from "./index.style";

interface IComponent {
  number: number;
  title: string;
}

const Title = ({ title, number }: IComponent) => {
  return (
    <TitleStyle>
      <TitleNumber>{`0${number}.`}</TitleNumber>
      {title}
    </TitleStyle>
  );
};

export default Title;
