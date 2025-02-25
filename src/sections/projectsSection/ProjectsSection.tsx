import { useState } from "react";
import { useTranslation } from "react-i18next";
import teamWorkImage from "../../assets/team-work.jpg";
import SkillPill from "../../components/skillPill/SkillPill";

interface Project {
  id: number;
  title: string;
  resume: string;
  description: string;
  image: string;
  technologies: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: "My amazing project with very long name",
    resume: "Salami incididunt dolore andouille cupidatat elit aliquip id sausage spare ribs turkey tempor.",
    description:
      "Salami incididunt dolore andouille cupidatat elit aliquip id sausage spare ribs turkey tempor. Deserunt bacon cupim, voluptate consequat sed venison nisi aliquip tri-tip...",
    image: teamWorkImage,
    technologies: ["Typescript", "Laravel", "PostgreSQL"],
  },
  {
    id: 2,
    title: "Another great project",
    resume: "Pancetta cow ipsum incididunt, leberkas picanha lorem chuck.",
    description:
      "Pancetta cow ipsum incididunt, leberkas picanha lorem chuck. Deserunt bacon cupim, voluptate consequat sed venison nisi aliquip tri-tip...",
    image: teamWorkImage,
    technologies: ["React", "SASS", "Node.js"],
  },
];

function ProjectSection() {
  const [selectedProject, setSelectedProject] = useState<Project>(projects[0]);
  
    const {t} = useTranslation();
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