import { useState } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import './CardStack.css';

function CardStack({ cats, currentIndex, onSwipe, totalCats }) {
  const [exitDirection, setExitDirection] = useState(null);
  
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-200, 200], [-25, 25]);
  const opacity = useTransform(x, [-200, -100, 0, 100, 200], [0, 1, 1, 1, 0]);

  const handleDragEnd = (event, info) => {
    const threshold = 100;
    
    if (Math.abs(info.offset.x) > threshold) {
      const direction = info.offset.x > 0 ? 'right' : 'left';
      setExitDirection(direction);
      
      // Delay the swipe callback to allow animation to complete
      setTimeout(() => {
        onSwipe(direction);
        setExitDirection(null);
        x.set(0);
      }, 200);
    } else {
      x.set(0);
    }
  };

  const handleButtonSwipe = (direction) => {
    setExitDirection(direction);
    setTimeout(() => {
      onSwipe(direction);
      setExitDirection(null);
      x.set(0);
    }, 200);
  };

  const currentCat = cats[currentIndex];
  const nextCat = cats[currentIndex + 1];

  if (!currentCat) return null;

  return (
    <div className="card-stack-container">
      <div className="progress">
        <div className="progress-text">
          {currentIndex + 1} / {totalCats}
        </div>
        <div className="progress-bar">
          <div 
            className="progress-fill" 
            style={{ width: `${((currentIndex + 1) / totalCats) * 100}%` }}
          />
        </div>
      </div>

      <div className="card-stack">
        {/* Next card (background) */}
        {nextCat && (
          <div className="card card-background">
            <img 
              src={nextCat.imageUrl} 
              alt="Next cat"
              loading="lazy"
            />
          </div>
        )}

        {/* Current card (draggable) */}
        <motion.div
          className="card card-current"
          style={{ x, rotate, opacity }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={handleDragEnd}
          animate={exitDirection ? {
            x: exitDirection === 'right' ? 500 : -500,
            opacity: 0,
            transition: { duration: 0.2 }
          } : {}}
        >
          <img 
            src={currentCat.imageUrl} 
            alt={`Cat ${currentCat.id}`}
            draggable="false"
          />
          
          {/* Swipe indicators */}
          <motion.div 
            className="swipe-indicator like"
            style={{ 
              opacity: useTransform(x, [0, 100], [0, 1])
            }}
          >
            ❤️ LIKE
          </motion.div>
          
          <motion.div 
            className="swipe-indicator nope"
            style={{ 
              opacity: useTransform(x, [-100, 0], [1, 0])
            }}
          >
            ✕ NOPE
          </motion.div>
        </motion.div>
      </div>

      {/* Action buttons */}
      <div className="action-buttons">
        <button 
          className="action-btn dislike-btn"
          onClick={() => handleButtonSwipe('left')}
          aria-label="Dislike"
        >
          <span className="btn-icon">✕</span>
        </button>
        
        <button 
          className="action-btn like-btn"
          onClick={() => handleButtonSwipe('right')}
          aria-label="Like"
        >
          <span className="btn-icon">❤️</span>
        </button>
      </div>

      <div className="swipe-hint">
        Swipe or use buttons
      </div>
    </div>
  );
}

export default CardStack;
