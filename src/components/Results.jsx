import { motion } from 'framer-motion';
import './Results.css';

function Results({ likedCats, totalCats, onRestart }) {
  const percentage = Math.round((likedCats.length / totalCats) * 100);

  return (
    <motion.div 
      className="results"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="results-header">
        <h2 className="results-title">Your Results!</h2>
        <div className="results-stats">
          <div className="stat-card">
            <div className="stat-number">{likedCats.length}</div>
            <div className="stat-label">Cats Liked</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">{percentage}%</div>
            <div className="stat-label">Match Rate</div>
          </div>
        </div>
        
        {likedCats.length === 0 && (
          <p className="no-likes">
            You didn't like any cats? 😿<br />
            Maybe give them another chance?
          </p>
        )}
        
        {likedCats.length === totalCats && (
          <p className="all-likes">
            You loved all the cats! 😻<br />
            You're a true cat person!
          </p>
        )}
      </div>

      {likedCats.length > 0 && (
        <div className="liked-cats-grid">
          {likedCats.map((cat, index) => (
            <motion.div
              key={cat.id}
              className="liked-cat-card"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.3 }}
            >
              <img 
                src={cat.imageUrl} 
                alt={`Liked cat ${cat.id}`}
                loading="lazy"
              />
              <div className="liked-overlay">
                <span className="heart-icon">❤️</span>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      <button className="restart-btn" onClick={onRestart}>
        <span className="restart-icon">🔄</span>
        Start Over
      </button>
    </motion.div>
  );
}

export default Results;
