import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { movies } from '../data/movieData';
import BalloonEffect from '../components/BalloonEffect';
import { useIsMobile } from '@/hooks/use-mobile';
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Button } from "@/components/ui/button";

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState<any>(null);
  const isMobile = useIsMobile();
  
  useEffect(() => {
    if (id) {
      const foundMovie = movies.find(m => m.id === parseInt(id));
      if (foundMovie) {
        setMovie(foundMovie);
      }
    }
  }, [id]);

  if (!movie) {
    return (
      <div className="min-h-screen paper-bg flex items-center justify-center">
        <p className="handwritten text-xl">Movie not found</p>
      </div>
    );
  }

  // Format genre information with content rating and duration if available
  const genreDisplay = () => {
    let display = movie.genre;
    if (movie.contentRating || movie.rating) {
      display += ` | ${movie.contentRating || movie.rating}`;
    }
    if (movie.duration) {
      display += ` | ${movie.duration}`;
    }
    return display;
  };

  return (
    <div className="min-h-screen paper-bg relative">
      {/* Floating balloons effect */}
      <BalloonEffect />
      
      <div className="container mx-auto px-4 py-12">
        {/* Back button */}
        <Link 
          to="/" 
          className="movie-card inline-flex items-center px-4 py-2 mb-8 hover:scale-105 transition-transform"
        >
          <ArrowLeft className="mr-2" size={20} />
          <span className="handwritten font-bold">Back to movies</span>
        </Link>
        
        <div className="flex flex-col md:flex-row gap-8 items-start">
          {/* Movie poster */}
          <div className="w-full md:w-1/3">
            <div className="movie-card p-4 mb-4 hover-poster">
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
              
              <img
                src={movie.title === 'The Silence of the Lambs' ? '/The%20Silence%20of%20the%20Lambs.jpg' : movie.poster}
                alt={`${movie.title} poster`}
                className="w-full rounded-sm object-cover transition-transform hover:scale-105 movie-poster"
                loading="lazy"
              />
            </div>
          </div>
          
          {/* Movie details */}
          <div className="w-full md:w-2/3">
            <div className="movie-card p-6 movie-detail">
              <h1 className="text-3xl md:text-4xl font-bold handwritten mb-4">
                {movie.title} ({movie.year})
              </h1>
              
              <p className="genre handwritten text-lg mb-4">
                {genreDisplay()}
              </p>
              
              {movie.synopsis && (
                <div className="synopsis mb-6">
                  <p className="handwritten text-lg font-caveat">
                    {movie.synopsis}
                  </p>
                </div>
              )}
              
              <div className="credits flex flex-col gap-4">
                {movie.director && (
                  <div>
                    <h3 className="handwritten font-bold text-lg">Director</h3>
                    <p className="handwritten">{movie.director}</p>
                  </div>
                )}
                
                {movie.stars && (
                  <div>
                    <h3 className="handwritten font-bold text-lg">Starring</h3>
                    <p className="handwritten">{movie.stars}</p>
                  </div>
                )}

                {movie.imdbRating && (
                  <div>
                    <h3 className="handwritten font-bold text-lg">IMDb Rating</h3>
                    <p className="handwritten">{movie.imdbRating}</p>
                  </div>
                )}

                <div className="mt-6">
                  <HoverCard>
                    <HoverCardTrigger asChild>
                      <Button variant="outline" className="handwritten">
                        Fun Facts
                      </Button>
                    </HoverCardTrigger>
                    <HoverCardContent className="handwritten">
                      <div className="font-caveat">
                        {movie.id === 1 ? (
                          <p>The Shawshank Redemption was a box office disappointment when it first released, but became one of the most beloved films through rentals and TV broadcasts!</p>
                        ) : movie.id === 11 ? (
                          <p>Anthony Hopkins won the Best Actor Oscar despite only appearing in the film for 16 minutes – one of the shortest performances to ever win!</p>
                        ) : (
                          <p>This movie has some interesting behind-the-scenes stories!</p>
                        )}
                      </div>
                    </HoverCardContent>
                  </HoverCard>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
