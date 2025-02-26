import { useState } from "react";
import { useTranslation } from "react-i18next";
import SkillPill from "../../components/skillPill/SkillPill";
import { Project, projects } from "../../config/constants";

function ProjectSection() {
  const [selectedProject, setSelectedProject] = useState<Project>(projects[0]);

  const { t } = useTranslation();
  return (
    <section id="portfolio" className="portfolio">
      <p className="section-name">{t("navbar.sections.projects")}</p>

      <div className="portfolio__container">
        <div className="portfolio__list">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`portfolio__item ${
                selectedProject.id === project.id ? "active" : ""
              }`}
              onClick={() => setSelectedProject(project)}
            >
              <div>
                <p className="portfolio__item-title">{project.title}</p>
                <p className="portfolio__item-resume">{project.title}</p>
              </div>
              <div className="portfolio__image-container">
                <img
                  src={project.image}
                  alt={project.title}
                  className="portfolio__item-image"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="portfolio__details">
          <div className="portfolio__details-image-container">
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="portfolio__details-image"
            />
          </div>
          <div className="portfolio__details-info">
            <h3 className="portfolio__details-title">
              {selectedProject.title}
            </h3>
            <p className="portfolio__details-description">
              {selectedProject.description}
            </p>
            <p className="portfolio__details-stack">
              Tecnologias de desarrollo
            </p>
            <SkillPill
              skills={selectedProject.technologies}
              activeClass={true}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectSection;
