import { Clock } from "./Clock";
import { Text, Wrapper } from "./styled";

export const Footer = () => {
  return (
    <Wrapper>
      <Text>
        <Clock />
      </Text>
      <Text>Liczba artykułów: </Text>
    </Wrapper>
  );
};
