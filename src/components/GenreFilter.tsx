import * as React from "react";
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface GenreFilterProps {
  genres: string[];
  onSelectGenre: (genre: string | null) => void;
  selectedGenre: string | null;
}

const GenreFilter = ({ genres, onSelectGenre, selectedGenre }: GenreFilterProps) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  
  const handleSelectGenre = (genre: string | null) => {
    onSelectGenre(genre);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <button 
          onClick={toggleDropdown} 
          type="button" 
          className="paper-fold inline-flex justify-between items-center w-40 px-4 py-2 text-sm handwritten"
          aria-expanded={isOpen}
          aria-haspopup="true"
        >
          {selectedGenre || 'All Genres'}
          <ChevronDown className="ml-2 h-4 w-4" />
        </button>
      </div>
      
      {isOpen && (
        <div 
          className="paper-fold absolute z-10 mt-1 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
        >
          <div className="py-1" role="menu" aria-orientation="vertical">
            <button
              onClick={() => handleSelectGenre(null)}
              className={`${
                selectedGenre === null ? 'bg-yellow-50' : ''
              } block w-full text-left px-4 py-2 text-sm handwritten hover:bg-yellow-50 text-black dark:text-yellow-400`}
              role="menuitem"
            >
              All Genres
            </button>
            {genres.map((genre) => (
              <button
                key={genre}
                onClick={() => handleSelectGenre(genre)}
                className={`${
                  selectedGenre === genre ? 'bg-yellow-50' : ''
                } block w-full text-left px-4 py-2 text-sm handwritten hover:bg-yellow-50 text-black dark:text-yellow-400`}
                role="menuitem"
              >
                {genre}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default GenreFilter;
