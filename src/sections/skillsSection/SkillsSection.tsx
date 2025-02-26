import { useTranslation } from "react-i18next";
import SkillCard from "../../components/skillsCard/SkillsCard";
import { SkillProps, skillsData } from "../../config/constants";

function SkillsSection() {
  const { t } = useTranslation();
  return (
    <section id="skills" className="skills-section">
      <p>{t("navbar.sections.skills")}</p>
      {skillsData.map((data: SkillProps, index: number) => (
        <SkillCard key={index} info={data} />
      ))}
    </section>
  );
}

export default SkillsSection;
