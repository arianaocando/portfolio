import "@styles/BackgroundCard.scss";

interface FeaturedCardProps {
  title: string;
  subtitle: string;
  description: string;
  image: string;
}

function BackgroundCard({ title, subtitle, description, image }: FeaturedCardProps) {
  return (
    <div className="featured-card">
      <div className="image-container">
        <img src={image} />
      </div>
      <div className="content">
        <h3>{title}</h3>
        <h4>{subtitle}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default BackgroundCard;