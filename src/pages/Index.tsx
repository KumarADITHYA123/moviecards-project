import * as React from "react";
import { useState, useEffect } from 'react';
import MovieCard from '../components/MovieCard';
import GenreFilter from '../components/GenreFilter';
import BalloonEffect from '../components/BalloonEffect';
import MobileMenu from '../components/MobileMenu';
import { movies, genres } from '../data/movieData';
import { useIsMobile } from '../hooks/use-mobile';

const Index: React.FC = () => {
  const [selectedGenre, setSelectedGenre] = useState<string | null>(null);
  const [filteredMovies, setFilteredMovies] = useState(movies);
  const [searchTerm, setSearchTerm] = useState('');
  const isMobile = useIsMobile();
  
  // Filter movies when genre or search term changes
  useEffect(() => {
    let result = movies;
    if (selectedGenre) {
      result = result.filter(movie => movie.genre === selectedGenre);
    }
    if (searchTerm.trim() !== '') {
      result = result.filter(movie => movie.title.toLowerCase().includes(searchTerm.toLowerCase()));
    }
    setFilteredMovies(result);
  }, [selectedGenre, searchTerm]);

  return (
    <div className="min-h-screen paper-bg">
      {/* Floating balloons effect */}
      <BalloonEffect />
      
      {/* Mobile menu for small screens */}
      {isMobile && (
        <MobileMenu 
          genres={genres}
          selectedGenre={selectedGenre}
          onSelectGenre={setSelectedGenre}
        />
      )}
      
      {/* Main content */}
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 handwritten dark:text-amber-200">
            My Movie Scrapbook
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 handwritten">
            A collection of favorite movies with a playful scrapbook design
          </p>
        </header>
        
        {/* Filters and Search - shown on desktop, hidden on mobile */}
        {!isMobile && (
          <div className="flex justify-center mb-8 items-center gap-6">
            {/* Search bar centered */}
            <input
              type="text"
              placeholder="Search movies..."
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              className="px-4 py-2 rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 handwritten text-lg w-72 bg-white mr-4"
              style={{ textAlign: 'center' }}
            />
            {/* Move All Genres button slightly forward */}
            <div className="ml-4">
              <GenreFilter 
                genres={genres}
                selectedGenre={selectedGenre}
                onSelectGenre={setSelectedGenre}
              />
            </div>
          </div>
        )}
        
        {/* Movie grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {filteredMovies.map((movie) => (
            <MovieCard 
              key={movie.id}
              id={movie.id}
              title={movie.title}
              year={movie.year}
              poster={movie.poster}
              genre={movie.genre}
            />
          ))}
        </div>
        
        {/* No movies found message */}
        {filteredMovies.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl handwritten dark:text-gray-300">No movies found for this genre.</p>
          </div>
        )}
      </div>
      
      {/* Footer */}
      <footer className="fixed right-6 bottom-6 z-50 bg-zinc-900/85 rounded-xl border border-zinc-800 px-5 py-2 text-zinc-400 text-lg flex items-center gap-2 shadow-lg">
        <span>© Made with</span>
        <span className="text-xl">❤️</span>
        <span>by <span className="text-white font-semibold">Adithya</span></span>
      </footer>
    </div>
  );
};

export default Index;
