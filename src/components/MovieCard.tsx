import { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

interface MovieCardProps {
  id: number;
  title: string;
  year: string;
  poster: string;
  genre: string;
}

const MovieCard = ({ id, title, year, poster, genre }: MovieCardProps) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isHeartAnimating, setIsHeartAnimating] = useState(false);
  const [rotationAngle] = useState(Math.random() * 6 - 3); // Random rotation between -3 and 3 degrees
  
  const toggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsFavorite(!isFavorite);
    setIsHeartAnimating(true);
  };
  
  useEffect(() => {
    if (isHeartAnimating) {
      const timer = setTimeout(() => {
        setIsHeartAnimating(false);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [isHeartAnimating]);

  return (
    <Link 
      to={`/movie/${id}`} 
      className="block"
    >
      <div 
        className="movie-card p-2 mb-8 mx-auto hover:shadow-2xl transition-all duration-300" 
        style={{ maxWidth: '250px', transform: `rotate(${rotationAngle}deg)` }}
      >
        <div className="relative">
          {/* Masking tape effect */}
          <div 
            className="tape" 
            style={{ 
              width: '60px', 
              height: '15px', 
              top: '-5px', 
              left: '50%', 
              marginLeft: '-30px',
              transform: `rotate(${Math.random() * 6 - 3}deg)` 
            }}
          ></div>
          
          {/* Movie poster */}
          <div className="relative overflow-hidden rounded-sm">
            {title === 'The Silence of the Lambs' ? (
              <img 
                src="/The%20Silence%20of%20the%20Lambs.jpg" 
                alt="The Silence of the Lambs poster" 
                className="w-full h-64 object-cover transition-transform duration-300 hover:scale-110"
                loading="lazy"
              />
            ) : (
              <img 
                src={poster} 
                alt={`${title} poster`} 
                className="w-full h-64 object-cover transition-transform duration-300 hover:scale-110"
                loading="lazy"
              />
            )}
            
            {/* Heart button */}
            <button 
              className={`heart-btn absolute bottom-3 right-3 p-2 rounded-full ${isFavorite ? 'active' : ''}`}
              onClick={toggleFavorite}
              aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
            >
              {/* SVG gradient for heart fill */}
              <svg width="0" height="0">
                <defs>
                  <linearGradient id="heart-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#ff6b6b"/>
                    <stop offset="100%" stopColor="#fcb69f"/>
                  </linearGradient>
                </defs>
              </svg>
              {/* Burst effect */}
              <span className="burst" />
              <Heart 
                size={22} 
                className={`${isFavorite ? 'fill-[url(#heart-gradient)]' : ''} ${isHeartAnimating ? 'heart-beat' : ''}`} 
                style={{ stroke: isFavorite ? '#fff' : '#ff6b6b', filter: isFavorite ? 'drop-shadow(0 0 6px #ff6b6b88)' : 'none' }}
              />
            </button>
          </div>
          
          {/* Movie info */}
          <div className="pt-3 text-center">
            <h3 className="text-lg font-bold handwritten line-clamp-1">{title}</h3>
            <div className="flex justify-between items-center mt-1">
              <span className="text-sm text-gray-600">{year}</span>
              {title === 'The Silence of the Lambs' ? (
                <span className="text-xs px-2 py-1 bg-yellow-100 rounded-sm">{genre}</span>
              ) : (
                <span className="text-xs px-2 py-1 bg-yellow-100 rounded-sm">{genre}</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
