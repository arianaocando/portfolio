import NavBar from "@components/navBar/NavBar";
import './scss/styles.scss';

import SkillsSection from "./sections/skillsSection/SkillsSection";
import ProjectSection from "./sections/projectsSection/ProjectsSection";
import Footer from "./sections/footer/Footer";
import BannerSection from "./sections/bannerSection/BannerSection";
import PositionSection from "./sections/positionSection/PositionSection";
import BackgroundSection from "./sections/backgroundSection/BackgroundSection";
import Layout from "./sections/layout";

function App() {
  return (
    <Layout>
      <NavBar />
      <BannerSection />
      <PositionSection />
      <BackgroundSection/>
      <SkillsSection />
      <ProjectSection />
      <Footer/>
    </Layout>
  );
}

export default App;
