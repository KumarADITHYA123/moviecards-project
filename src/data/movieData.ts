export interface Movie {
  id: number;
  title: string;
  year: string;
  genre: string;
  poster: string;
  rating?: string;
  duration?: string;
  synopsis?: string;
  director?: string;
  stars?: string;
  imdbRating?: string;
  contentRating?: string;
}

// Sample movie data
export const movies: Movie[] = [
  {
    id: 1,
    title: "Baahubali: The Beginning",
    year: "2015",
    genre: "Action",
    poster: "/prabhas.webp",
    rating: "UA",
    duration: "2h 39m",
    synopsis: "In the ancient kingdom of Mahishmati, Shivudu discovers his true heritage and rises to challenge the tyrant Bhallaladeva, embarking on an epic quest to rescue his mother and reclaim his legacy.",
    director: "S. S. Rajamouli",
    stars: "Prabhas, Rana Daggubati, Anushka Shetty, Tamannaah Bhatia",
    imdbRating: "8.0/10 ★★★★☆"
  },
  {
    id: 2,
    title: "The Godfather",
    year: "1972",
    genre: "Crime",
    poster: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=1459",
    rating: "R",
    duration: "2h 55m",
    synopsis: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
    director: "Francis Ford Coppola",
    stars: "Marlon Brando, Al Pacino, James Caan",
    imdbRating: "9.2/10 ★★★★★"
  },
  {
    id: 3,
    title: "The Dark Knight",
    year: "2008",
    genre: "Action",
    poster: "https://images.unsplash.com/photo-1531259683007-016a7b628fc3?auto=format&fit=crop&q=80&w=1374",
    rating: "PG-13",
    duration: "2h 32m",
    synopsis: "Batman faces the Joker, a criminal mastermind who plunges Gotham City into chaos and forces Batman closer to crossing the line between hero and vigilante.",
    director: "Christopher Nolan",
    stars: "Christian Bale, Heath Ledger, Aaron Eckhart",
    imdbRating: "9.0/10 ★★★★★"
  },
  {
    id: 4,
    title: "Pulp Fiction",
    year: "1994",
    genre: "Crime",
    poster: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80&w=1450",
    rating: "R",
    duration: "2h 34m",
    synopsis: "The lives of two mob hitmen, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
    director: "Quentin Tarantino",
    stars: "John Travolta, Uma Thurman, Samuel L. Jackson",
    imdbRating: "8.9/10 ★★★★☆"
  },
  {
    id: 5,
    title: "Fight Club",
    year: "1999",
    genre: "Drama",
    poster: "https://images.unsplash.com/photo-1528495612343-9ca9f4a4de28?auto=format&fit=crop&q=80&w=1374",
    rating: "R",
    duration: "2h 19m",
    synopsis: "An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into something much more.",
    director: "David Fincher",
    stars: "Brad Pitt, Edward Norton, Helena Bonham Carter",
    imdbRating: "8.8/10 ★★★★☆"
  },
  {
    id: 6,
    title: "Inception",
    year: "2010",
    genre: "Sci-Fi",
    poster: "https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?auto=format&fit=crop&q=80&w=1374",
    rating: "PG-13",
    duration: "2h 28m",
    synopsis: "A thief who steals corporate secrets through dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO.",
    director: "Christopher Nolan",
    stars: "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page",
    imdbRating: "8.8/10 ★★★★☆"
  },
  {
    id: 7,
    title: "The Matrix",
    year: "1999",
    genre: "Sci-Fi",
    poster: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=1470",
    rating: "R",
    duration: "2h 16m",
    synopsis: "A computer hacker learns about the true nature of his reality and his role in the war against its controllers.",
    director: "The Wachowskis",
    stars: "Keanu Reeves, Laurence Fishburne, Carrie-Anne Moss",
    imdbRating: "8.7/10 ★★★★☆"
  },
  {
    id: 8,
    title: "Goodfellas",
    year: "1990",
    genre: "Crime",
    poster: "https://images.unsplash.com/photo-1513106580091-1d82408b8cd6?auto=format&fit=crop&q=80&w=1470",
    rating: "R",
    duration: "2h 26m",
    synopsis: "The story of Henry Hill and his life in the mob, covering his relationship with his wife Karen Hill and his mob partners.",
    director: "Martin Scorsese",
    stars: "Robert De Niro, Ray Liotta, Joe Pesci",
    imdbRating: "8.7/10 ★★★★☆"
  },
  {
    id: 9,
    title: "Interstellar",
    year: "2014",
    genre: "Sci-Fi",
    poster: "https://images.unsplash.com/photo-1465101162946-4377e57745c3?auto=format&fit=crop&q=80&w=1478",
    rating: "PG-13",
    duration: "2h 49m",
    synopsis: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    director: "Christopher Nolan",
    stars: "Matthew McConaughey, Anne Hathaway, Jessica Chastain",
    imdbRating: "8.6/10 ★★★★☆"
  },
  {
    id: 10,
    title: "Forrest Gump",
    year: "1994",
    genre: "Drama",
    poster: "https://images.unsplash.com/photo-1515634928627-2a4e0dae3ddf?auto=format&fit=crop&q=80&w=1470",
    rating: "PG-13",
    duration: "2h 22m",
    synopsis: "The presidencies of Kennedy and Johnson, the Vietnam War, and more through the eyes of an Alabama man with a low IQ but good intentions.",
    director: "Robert Zemeckis",
    stars: "Tom Hanks, Robin Wright, Gary Sinise",
    imdbRating: "8.8/10 ★★★★☆"
  },
  {
    id: 11,
    title: "The Silence of the Lambs",
    year: "1991",
    genre: "Thriller",
    contentRating: "R",
    duration: "1h 58m",
    synopsis: "FBI trainee Clarice Starling interviews imprisoned cannibal Hannibal Lecter for insights into catching another serial killer.",
    director: "Jonathan Demme",
    stars: "Jodie Foster, Anthony Hopkins, Scott Glenn",
    imdbRating: "8.6/10 ★★★★☆",
    poster: "https://images.unsplash.com/photo-1541512416066-3bfaef566039?auto=format&fit=crop&q=80&w=1470"
  },
  {
    id: 12,
    title: "The Lord of the Rings",
    year: "2001",
    genre: "Fantasy",
    poster: "https://images.unsplash.com/photo-1506466010722-395aa2bef877?auto=format&fit=crop&q=80&w=1588",
    rating: "PG-13",
    duration: "2h 58m",
    synopsis: "A meek Hobbit and eight companions set out on a journey to destroy the One Ring and save Middle-earth from the Dark Lord Sauron.",
    director: "Peter Jackson",
    stars: "Elijah Wood, Ian McKellen, Orlando Bloom",
    imdbRating: "8.8/10 ★★★★☆"
  }
];

// Extract unique genres
export const genres: string[] = Array.from(new Set(movies.map(movie => movie.genre))).sort();
