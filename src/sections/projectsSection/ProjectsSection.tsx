import React from "react";
import { useTranslation } from "react-i18next";
import "@styles/ProjectsSection.scss";
import PillButton from "../../components/pillButton/PillButton.tsx";
import { Project, projects } from "../../config/constants.ts";

function ProjectSection() {
  const [selectedProject, setSelectedProject] = React.useState<Project>(
    projects[0]
  );
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
              <div className="portfolio__item-info">
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
          <h3 className="portfolio__details-title">{selectedProject.title}</h3>
          <p className="portfolio__details-description">
            {selectedProject.description}
          </p>
          <p className="portfolio__details-stack">Tecnologias de desarrollo</p>
          <PillButton
            skills={selectedProject.technologies}
            activeClass={true}
          />
        </div>
      </div>
    </section>
  );
}

export default ProjectSection;
