function SkillPill({
  skills,
  activeClass,
}: {
  skills: string[];
  activeClass?: boolean;
}) {
  return (
    <div className="skill-pills">
      {skills.map((skill, index) => (
        <button key={index} className={activeClass ? "active" : ""}>
          {skill}
        </button>
      ))}
    </div>
  );
}   

export default SkillPill;