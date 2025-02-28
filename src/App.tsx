import NavBar from "@components/navBar/NavBar.tsx";
import Layout from "./sections/layout/index.tsx";
import ThemeModeProvider from "./providers/ThemeModeProvider.tsx";
import BannerSection from "./sections/bannerSection/BannerSection.tsx";
import PositionSection from "./sections/positionSection/PositionSection.tsx";
import BackgroundSection from "./sections/backgroundSection/BackgroundSection.tsx";
import SkillsSection from "./sections/skillsSection/SkillsSection.tsx";
import ProjectSection from "./sections/projectsSection/ProjectsSection.tsx";
import Footer from "./sections/footer/Footer.tsx";

function App() {
  return (
    <ThemeModeProvider>
      <Layout>
        <NavBar />
        <BannerSection />
        <PositionSection />
        <BackgroundSection />
        <SkillsSection />
        <ProjectSection />
        <Footer />
      </Layout>
    </ThemeModeProvider>
  );
}

export default App;
