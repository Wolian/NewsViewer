import { GnNews, PopupButton, ViewButton, Wrapper } from "./styled";

export const Header = () => (
  <Wrapper>
    <GnNews>gnNews</GnNews>
    <ViewButton>Zmiana widoku newsów</ViewButton>
    <PopupButton>Popup</PopupButton>
  </Wrapper>
);