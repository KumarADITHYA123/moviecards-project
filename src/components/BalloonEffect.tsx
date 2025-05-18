
import { useEffect, useState, useCallback } from 'react';

interface Bubble {
  id: number;
  size: number;
  color: string;
  left: string;
  animationDuration: string;
  delay: string;
  opacity: number;
  popping: boolean;
  random: number;
  fromTop: boolean; // New property to determine direction
}

const colors = [
  'rgba(255, 107, 107, 0.6)', // Red
  'rgba(78, 205, 196, 0.6)',  // Teal
  'rgba(255, 209, 102, 0.6)', // Yellow
  'rgba(106, 5, 114, 0.6)',   // Purple
  'rgba(255, 154, 139, 0.6)', // Pink
  'rgba(111, 207, 151, 0.6)'  // Green
];

const BalloonEffect = () => {
  const [bubbles, setBubbles] = useState<Bubble[]>([]);
  const [popSound] = useState(() => new Audio('/balloon-pop.mp3'));
  
  // Create new bubble with random properties
  const createBubble = useCallback((fromTop?: boolean) => {
    const id = Date.now() + Math.random() * 1000;
    const size = 10 + Math.random() * 30; // Random size between 10px and 40px
    const color = colors[Math.floor(Math.random() * colors.length)];
    const left = `${Math.random() * 100}%`;
    const animationDuration = `${15 + Math.random() * 15}s`; // Between 15-30s
    const delay = `${Math.random() * 10}s`;
    const opacity = 0.2 + Math.random() * 0.5; // Random opacity between 0.2-0.7
    const random = Math.random();
    
    return { id, size, color, left, animationDuration, delay, opacity, popping: false, random, fromTop: !!fromTop };
  }, []);
  
  // Initialize bubbles
  useEffect(() => {
    // Create initial bubbles - half from bottom, half from top
    const initialBubblesBottom = Array.from({ length: 15 }, () => createBubble(false));
    const initialBubblesTop = Array.from({ length: 15 }, () => createBubble(true));
    setBubbles([...initialBubblesBottom, ...initialBubblesTop]);
    
    // Add new bubbles periodically
    const intervalId = setInterval(() => {
      setBubbles(currentBubbles => {
        // Remove any bubbles that are popping or limit total number
        const activeBubbles = currentBubbles.filter(b => !b.popping).slice(-29);
        // Alternate between top and bottom for new bubbles
        const fromTop = activeBubbles.length % 2 === 0;
        return [...activeBubbles, createBubble(fromTop)];
      });
    }, 2000);
    
    return () => clearInterval(intervalId);
  }, [createBubble]);
  
  // Handle bubble pop
  const handleBubblePop = (id: number) => {
    // Play pop sound
    try {
      popSound.currentTime = 0;
      popSound.play().catch(e => console.log("Audio play failed:", e));
    } catch (e) {
      console.log("Audio error:", e);
    }
    
    // Mark bubble as popping
    setBubbles(currentBubbles => 
      currentBubbles.map(bubble => 
        bubble.id === id ? { ...bubble, popping: true } : bubble
      )
    );
    
    // Remove popped bubble after animation completes
    setTimeout(() => {
      setBubbles(currentBubbles => 
        currentBubbles.filter(bubble => bubble.id !== id)
      );
    }, 300);
  };
  
  return (
    <div className="bubbles-container">
      {bubbles.map(bubble => (
        <div
          key={bubble.id}
          className={`bubble ${bubble.popping ? 'popping' : ''} ${bubble.fromTop ? 'from-top' : ''}`}
          style={{
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            backgroundColor: bubble.color,
            left: bubble.left,
            opacity: bubble.opacity,
            animationDuration: bubble.animationDuration,
            animationDelay: bubble.delay,
            '--bubble-random': bubble.random,
          } as React.CSSProperties}
          onClick={() => handleBubblePop(bubble.id)}
          aria-hidden="true"
        />
      ))}
    </div>
  );
};

export default BalloonEffect;
