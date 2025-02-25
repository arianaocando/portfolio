import { useTranslation } from "react-i18next";
import SkillCard from "../../components/skillsCard/SkillsCard";

function SkillsSection() {
  const {t} = useTranslation();
  return (
    <section id="skills" className="skills-section">
      <p>{t('navbar.sections.skills')}</p>
      <SkillCard
        skill={{
          name: "JavaScript",
        }}
      />
      <SkillCard
        skill={{
          name: "JavaScript",
        }}
      />
    </section>
  );
}

export default SkillsSection;