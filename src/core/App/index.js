import { ThemeProvider } from "styled-components";
import { Footer } from "../../features/NewsViewer/Footer";
import { Header } from "../../features/NewsViewer/Header";
import { MainContent } from "../../features/NewsViewer/MainContent";
import { SideMenu } from "../../features/NewsViewer/SideMenu";
import { GlobalStyle } from "./GlobalStyle";
import { theme } from "./theme";

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
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
