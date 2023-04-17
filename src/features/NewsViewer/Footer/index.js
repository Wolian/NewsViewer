import { Clock } from "./Clock";
import { Text, Wrapper } from "./styled";

export const Footer = () => (
    <Wrapper>
        <Text><Clock /></Text>
        <Text>Liczba artykułów: 4 </Text>
    </Wrapper>
);