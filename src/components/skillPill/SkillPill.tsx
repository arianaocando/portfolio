function SkillPill({
  skills,
  activeClass,
  onClick
}: {
  skills: string[];
  activeClass?: string
  onClick: (nextState:string)=>void
}) {
  return (
    <div className="skill-pills">
      {skills.map((skill, index) => (
        <button onClick={()=>onClick(skill)} key={index} className={activeClass === skill? "active" : ""}>
          {skill}
        </button>
      ))}
    </div>
  );
}   

export default SkillPill;