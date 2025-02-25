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
      <span className="year">{year}</span>
      <div className="card">
        <h3>{title}</h3>
        <p>{subtitle}</p>
      </div>
    </div>
  );
}   

export default TimelineItem;