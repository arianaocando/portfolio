import "@styles/SkillsSection.scss";
import { useTranslation } from "react-i18next";
import SkillCard from "../../components/skillsCard/SkillsCard.tsx";
import { SkillProps, skillsData } from "../../config/constants.tsx";

function SkillsSection() {
  const { t } = useTranslation();
  return (
    <section id="skills" className="skills-section">
      <h2>{t("navbar.sections.skills")}</h2>
      {skillsData.map((data: SkillProps, index: number) => (
        <SkillCard index={index} info={data} />
      ))}
    </section>
  );
}

export default SkillsSection;
