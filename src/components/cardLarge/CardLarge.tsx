import image from '@assets/imagen.svg';

interface FeaturedCardProps {
  title: string;
  subtitle: string;
  description: string;
  imge: string;
}

function CardLarge({ title, subtitle, description }: FeaturedCardProps) {
  return (
    <div className="featured-card">
      <img src={image} />
      <div className="featured-card__content">
        <h3>{title}</h3>
        <span>{subtitle}</span>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default CardLarge;