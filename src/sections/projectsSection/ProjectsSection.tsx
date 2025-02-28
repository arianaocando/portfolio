import React from "react";
import { useTranslation } from "react-i18next";
import "@styles/ProjectsSection.scss";
import PillButton from "../../components/pillButton/PillButton.tsx";
import { Project, projects } from "../../config/constants.tsx";

function ProjectSection() {
  const [selectedProject, setSelectedProject] = React.useState<Project>(
    projects[0]
  );
  const { t } = useTranslation();
  return (
    <section id="portfolio" className="portfolio">
      <p className="section-name">{t("navbar.sections.projects")}</p>

      <div className="section-container">
        <div className="list">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`item ${
                selectedProject.id === project.id ? "active" : ""
              }`}
              onClick={() => setSelectedProject(project)}
            >
              <div className="item-info">
                <p className="item-title">{project.title}</p>
                <p className="item-resume">
                  Tecnology use here is very special because of what i made and
                  its very very special and i made it
                </p>
              </div>
              <div className="image-container">
                <img
                  src={project.image}
                  alt={project.title}
                  className="item-image"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="details">
          <div className="image-container">
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="image"
            />
          </div>
          <h3 className="title">{selectedProject.title}</h3>
          <p className="description">{selectedProject.description}</p>
          <p className="stack">Tecnologias de desarrollo</p>
          <PillButton skills={selectedProject.technologies} activeClass />
        </div>
      </div>
    </section>
  );
}

export default ProjectSection;
