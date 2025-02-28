import { useState } from 'react';
import { SkillProps } from '../../config/constants';
import PillButton from "../pillButton/PillButton";

function SkillCard({ info, key }: { info: SkillProps; key: number }) {
  const [activeSkill, setActiveSkill] = useState<string | undefined>('typescript')
  
  return (
    <div className="skill-card w-100 mb-5" key={key}>
      <p className="skill-card__title">{info.role}</p>
      <PillButton
        skills={info.stacks}
        activeClass={activeSkill ? true : false}
        onClick={(nextState) => {
          setActiveSkill(nextState);
        }}
        index={index}
      />
      {activeSkill && (
        <div className="skill-card__container">
          <div className="skill-info">
            <p className="skill-info__title">{activeSkill}</p>
            <p className="skill-info__description">{info.description}</p>
          </div>
          <div className="related-projects-section">
            <p className="related-projects">Proyectos relacionados</p>
            {info.portfolio.map((portfolio, index) => (
              <div className="card-project-container" key={index}>
                <div className="project-info">
                  <p className="project-info__title">{portfolio.title}</p>
                  <p className="project-info__subtitle">{portfolio.company}</p>
                </div>
                <button className="see-project-button">
                  <a aria-current="step" href={portfolio.url}>
                    Ver proyecto
                  </a>
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}  

export default SkillCard;