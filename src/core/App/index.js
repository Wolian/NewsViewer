import { ThemeProvider } from "styled-components";
import { Footer } from "../../features/NewsViewer/Footer";
import { Header } from "../../features/NewsViewer/Header";
import { MainContent } from "../../features/NewsViewer/MainContent";
import { SideMenu } from "../../features/NewsViewer/SideMenu";
import { GlobalStyle } from "./GlobalStyle";
import { theme } from "./theme";
import { Normalize } from "styled-normalize";

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Normalize />
      <GlobalStyle />
      <Header />
      <main>
        <SideMenu />
        <MainContent />
      </main>
      <Footer />
    </ThemeProvider>
  );
};
