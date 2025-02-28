import "@styles/TimeLineItem.scss";

interface TimelineItemProps {
  year: string;
  title: string;
  subtitle: string;
  isSelected: boolean;
  onSelect: () => void;
}

function TimelineItem({
  year,
  title,
  subtitle,
  isSelected,
  onSelect,
}: TimelineItemProps) {
  return (
    <div
      className={`timeline-item ${isSelected ? "selected" : ""}`}
      onClick={onSelect}
    >
      {isSelected && <div className="arrow" />}
      <span className="year">{year}</span>
      <div className="card-content">
        <h3>{title}</h3>
        <h4>{subtitle}</h4>
        <p>
          Descripción del evento 4 Salami incididunt dolore andouille cupidatat
          elit aliquip id sausage spare ribs turkey tempor.
        </p>
      </div>
    </div>
  );
}

export default TimelineItem;
