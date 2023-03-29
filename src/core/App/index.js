import { Footer } from "../../features/NewsViewer/Footer";
import { Header } from "../../features/NewsViewer/Header";
import { MainContent } from "../../features/NewsViewer/MainContent";
import { SideMenu } from "../../features/NewsViewer/SideMenu";

export const App = () => {
  return (
    <>
      <Header />
      <main>
        <SideMenu />
        <MainContent />
      </main>
      <Footer />
    </>
  );
};