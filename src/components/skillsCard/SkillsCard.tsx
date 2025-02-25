import SkillPill from '../skillPill/SkillPill';

function SkillCard({ skill }) {
  return (
    <div className="skill-card w-100 mb-5">
      <p className="skill-card__title">Frontend</p>
      <SkillPill skills={["JavaScript", "TypeScript"]} />
      <div className="skill-card__container">
        <div className="skill-info">
          <p className="skill-info__title">Typescript</p>
          <p className="skill-info__description">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia
            adipisci assumenda placeat accusantium necessitatibus beatae
            veritatis, facere vitae, ipsam sunt rem dolores, quam alias corporis
            quaerat deleniti perferendis quidem voluptate?
          </p>
        </div>
        <div className="related-projects-section">
          <p className="related-projects">Proyectos relacionados</p>
          <div className="card-project-container ">
            <div className="w-50 project-info">
              <p className="project-info__title">titulo</p>
              <p className="project-info__subtitle">subtitulo</p>
            </div>
            <button className="see-project-button">Ver proyecto</button>
          </div>
        </div>
      </div>
    </div>
  );
}  

export default SkillCard;