import { useState, useEffect } from 'react';
import './App.css';
import CardStack from './components/CardStack';
import Results from './components/Results';
import Header from './components/Header';

function App() {
  const [cats, setCats] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [likedCats, setLikedCats] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [loading, setLoading] = useState(true);

  // Generate cat images from Cataas API
  useEffect(() => {
    const generateCats = () => {
      const catArray = Array.from({ length: 15 }, (_, i) => ({
        id: i,
        imageUrl: `https://cataas.com/cat?width=400&height=500&${i}`,
        liked: null
      }));
      setCats(catArray);
      setLoading(false);
    };

    generateCats();
  }, []);

  const handleSwipe = (direction) => {
    const currentCat = cats[currentIndex];
    
    if (direction === 'right') {
      setLikedCats([...likedCats, currentCat]);
    }

    // Move to next card
    if (currentIndex < cats.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      // Show results when all cats are swiped
      setShowResults(true);
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setLikedCats([]);
    setShowResults(false);
  };

  if (loading) {
    return (
      <div className="app">
        <div className="loading">
          <div className="loading-spinner"></div>
          <p>Loading adorable cats...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="app">
      <Header />
      
      {!showResults ? (
        <CardStack
          cats={cats}
          currentIndex={currentIndex}
          onSwipe={handleSwipe}
          totalCats={cats.length}
        />
      ) : (
        <Results
          likedCats={likedCats}
          totalCats={cats.length}
          onRestart={handleRestart}
        />
      )}
    </div>
  );
}

export default App;
