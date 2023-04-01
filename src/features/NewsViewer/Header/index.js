import { Buttons, NewsViewer, PopupButton, ViewButton, Wrapper } from "./styled";

export const Header = () => (
  <Wrapper>
    <NewsViewer>News Viewer</NewsViewer>
    <Buttons>
      <ViewButton>Zmiana widoku newsów</ViewButton>
      <PopupButton>Popup</PopupButton>
    </Buttons>
  </Wrapper>
);
