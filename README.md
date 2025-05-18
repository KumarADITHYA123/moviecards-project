# Movie Scrapbook

A modern, responsive movie scrapbook application built with React and TypeScript, featuring a beautiful torn-paper UI, interactive movie cards, and a playful user experience.

## Table of Contents

- [Overview](#overview)
  - [The Challenge](#the-challenge)
  - [Screenshots](#screenshots)
  - [Links](#links)
- [My Process](#my-process)
  - [Built With](#built-with)
  - [What I Learned](#what-i-learned)
  - [Future Improvements](#future-improvements)
  - [Resources](#resources)
- [Author](#author)

## Overview

### The Challenge

Users should be able to:

- Browse a collection of favorite movies
- Filter movies by genre
- Search for movies by title
- View detailed information for each movie
- Enjoy a playful scrapbook design with torn paper effects
- Experience a responsive design that works on all devices
- Toggle between light and dark themes

### Screenshots

![](./public/screen%20shorts/Screenshot%202025-05-18%20232100.png)
![](./public/screen%20shorts/Screenshot%202025-05-18%20232140.png)
![](./public/screen%20shorts/Screenshot%202025-05-18%20232214.png)
![](./public/screen%20shorts/Screenshot%202025-05-18%20232257.png)

### Links

- Live Site: [https://moviecards-project.netlify.app/](https://moviecards-project.netlify.app/)

## My Process

### Built With

- React 18 with TypeScript
- Vite for fast development and building
- Tailwind CSS for styling
- Radix UI for accessible components
- React Router for navigation
- React Query for data fetching
- Framer Motion for animations
- Custom hooks for theme and mobile detection

### What I Learned

- Implemented modern React patterns with TypeScript
- Enhanced understanding of component architecture and state management
- Created a unique scrapbook UI with custom CSS and Tailwind
- Improved skills in responsive layouts and theme toggling
- Used Radix UI for accessible, composable UI primitives

```typescript
// Example: MovieCard component snippet
const MovieCard = ({ id, title, year, poster, genre }: MovieCardProps) => (
  <Link to={`/movie/${id}`} className="block">
    <div className="movie-card p-2 mb-8 mx-auto hover:shadow-2xl transition-all duration-300">
      <img src={poster} alt={`${title} poster`} className="w-full h-64 object-cover" />
      <div className="pt-3 text-center">
        <h3 className="text-lg font-bold handwritten">{title}</h3>
        <span className="text-sm text-gray-600">{year}</span>
        <span className="text-xs px-2 py-1 bg-yellow-100 rounded-sm">{genre}</span>
      </div>
    </div>
  </Link>
);
```

### Future Improvements

- Add user authentication and personal movie lists
- Allow users to add, edit, and rate movies
- Implement advanced search and filtering
- Add social sharing features
- Create a community feature for sharing movie lists
- Add offline support with PWA
- Enhance accessibility and keyboard navigation

---

### Resources

- [React Documentation](https://react.dev/)
- [TypeScript Documentation](https://www.typescriptlang.org/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)
- [Radix UI Documentation](https://www.radix-ui.com/)
- [Vite Documentation](https://vitejs.dev/)

---

## Author

- **Name**: B Kumar Adithya
- **Email**: kumaradithyabathula@gmail.com
- GitHub: [KumarADITHYA123](https://github.com/KumarADITHYA123)
- LinkedIn: [Kumar Adithya Bathula](https://www.linkedin.com/in/kumar-adithya-bathula-66294b2b2/)