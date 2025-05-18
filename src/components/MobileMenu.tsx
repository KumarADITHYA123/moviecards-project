
import { useState } from 'react';
import { Menu } from 'lucide-react';

interface MobileMenuProps {
  genres: string[];
  onSelectGenre: (genre: string | null) => void;
  selectedGenre: string | null;
}

const MobileMenu = ({ genres, onSelectGenre, selectedGenre }: MobileMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  const handleSelectGenre = (genre: string | null) => {
    onSelectGenre(genre);
    setIsOpen(false);
  };

  return (
    <>
      <button 
        onClick={toggleMenu}
        className="menu-tab handwritten font-bold"
        style={{ transform: isOpen ? 'translateX(250px)' : 'translateX(0)' }}
      >
        <Menu size={24} />
        <span className="ml-2">Genres</span>
      </button>
      
      <div 
        className={`fixed top-0 left-0 h-full w-64 paper-bg shadow-lg z-40 transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="py-6 px-4">
          <h3 className="text-xl font-bold handwritten mb-6">Movie Genres</h3>
          <ul className="space-y-2">
            <li>
              <button
                onClick={() => handleSelectGenre(null)}
                className={`handwritten block w-full text-left py-2 px-4 rounded-md ${
                  selectedGenre === null ? 'bg-yellow-100' : 'hover:bg-yellow-50'
                }`}
              >
                All Genres
              </button>
            </li>
            {genres.map((genre) => (
              <li key={genre}>
                <button
                  onClick={() => handleSelectGenre(genre)}
                  className={`handwritten block w-full text-left py-2 px-4 rounded-md ${
                    selectedGenre === genre ? 'bg-yellow-100' : 'hover:bg-yellow-50'
                  }`}
                >
                  {genre}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      {/* Overlay to close menu when clicked outside */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-20 z-30"
          onClick={toggleMenu}
          aria-hidden="true"
        />
      )}
    </>
  );
};

export default MobileMenu;
