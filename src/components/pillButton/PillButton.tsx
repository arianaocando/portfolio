import "@styles/PillButton.scss";

interface PillButtonProp {
  index?: number;
  skills: string[];
  activeClass?: boolean;
  activePillLabel?: string;
  onClick?: (nextState: string) => void;
}

function PillButton({
  index,
  skills,
  activeClass = false,
  activePillLabel,
  onClick = () => {},
}: PillButtonProp) {
  return (
    <div className="skill-pills" key={index}>
      {skills.map((skill, index) => (
        <button
          onClick={() => onClick(skill)}
          key={index}
          className={activeClass || activePillLabel === skill? "active" : ""}
        >
          {skill}
        </button>
      ))}
    </div>
  );
}

export default PillButton;
