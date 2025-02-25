import typescriptImage from '@/assets/typescript-image.svg';

interface CarouselCardProps {
  title: string;
  description: string;
  image: string;
}

function CarouselCard({ title, description, image }: CarouselCardProps) {
  return (
    <div className="carousel-card">
      <div className="carousel-card__container">
        <div className="carousel-card__info">
          <p className="info-title">{title}</p>
          <p className="info-description">{description}</p>
        </div>
        <div className="carousel-card__image-container">
          <img src={typescriptImage} alt={title} />
        </div>

        <div className="carousel-card__projects">
          <p>Proyectos relacionados</p>
          <div>
            <img src={image} alt={title} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarouselCard; 
/*
import { useEffect, useState } from "react";

/**
 * @file Carousel.tsx
 * @description Componente de carrusel responsive en React con TypeScript y SASS
 *

/**
 * @typedef {Object} CarouselItem - Elemento del carrusel
 * @property {number} id - Identificador único
 * @property {string} title - Título de la tarjeta
 * @property {string} image - URL de la imagen
 * @property {string} description - Descripción del contenido
 *

interface CarouselProps {
  /** Array de elementos para mostrar en el carrusel *
    items: {
      id: number;
    title: string;
    description: string;
    image: string;
  }[];
}

/**
 * Componente de carrusel responsive con navegación y transiciones
 * @component
 * @param {CarouselProps} props - Propiedades del componente
 * @returns {React.ReactElement} Elemento JSX del carrusel
 *
const CarouselCard: React.FC<CarouselProps> = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  /**
   * Navega al slide anterior
   * @function prevSlide
   *
  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  /**
   * Navega al siguiente slide
   * @function nextSlide
   *
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  };

  /**
   * Maneja el inicio del touch
   * @function handleTouchStart
   * @param {React.TouchEvent} e - Evento táctil
   *
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  /**
   * Maneja el movimiento del touch
   * @function handleTouchMove
   * @param {React.TouchEvent} e - Evento táctil
   *
  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  /**
   * Maneja el fin del touch
   * @function handleTouchEnd
   
  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) nextSlide();
    if (touchStart - touchEnd < -50) prevSlide();
  };

  // Configuración de teclado
  useEffect(() => {
    /**
     * Maneja navegación por teclado
     * @function handleKeyDown
     * @param {KeyboardEvent} e - Evento del teclado
     
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'ArrowRight') nextSlide();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex]);

  return (
    <div 
      className="carousel"
      role="region" 
      aria-label="Carrusel de tarjetas"
    >
      <div 
        className="carousel__content"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {items.map((item, index) => (
          <div
            key={item.id}
            className={`carousel__item ${index === currentIndex ? 'active' : ''}`}
            role="group"
            aria-label={`Elemento ${index + 1} de ${items.length}`}
            aria-hidden={index !== currentIndex}
          >
            <img
              src={item.image}
              alt={item.title}
              className="carousel__image"
              loading="lazy"
            />
            <div className="carousel__info">
              <h3 className="carousel__title">{item.title}</h3>
              <p className="carousel__description">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="carousel__controls">
        <button 
          className="carousel__btn carousel__btn--prev"
          onClick={prevSlide}
          aria-label="Elemento anterior"
        >
          &#9665;
        </button>
        
        <div className="carousel__indicators">
          {items.map(({title}, index) => (
            <button
              key={index}
              className={`carousel__indicator ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Ir al elemento ${index + 1}`}
              >
                  {title}
              </button>
          ))}
        </div>

        <button 
          className="carousel__btn carousel__btn--next"
          onClick={nextSlide}
          aria-label="Siguiente elemento"
        >
          &#9655;
        </button>
      </div>
    </div>
  );
};

export default CarouselCard;

//export type { CarouselItem };
 */