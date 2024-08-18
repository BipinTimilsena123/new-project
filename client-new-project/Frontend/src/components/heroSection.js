import React, { useState, useEffect } from 'react';
import Card from './card.js';

const HeroSection = () => {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetchCards();
  }, []);

  const fetchCards = (query = '') => {
    setLoading(true);
    const url = query 
      ? `http://localhost:3000/api/cards/search?q=${encodeURIComponent(query)}` 
      : 'http://localhost:3000/api/cards';

    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log('Data fetched:', data); 
        setCards(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setError(error);
        setLoading(false);
      });
  };

  const handleSearch = () => {
    fetchCards(searchQuery);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div style={{ backgroundColor: 'white', padding: '20px' }}>
      <h1>Hero Section</h1>
      <div style={{ marginBottom: '20px', textAlign: 'center' }}>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search cards..."
          style={{ padding: '10px', width: '300px', marginRight: '10px' }}
        />
        <button onClick={handleSearch} style={{ padding: '10px' }}>Search</button>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
        {cards.map((card) => (
          <Card key={card._id} title={card.title} description={card.description} />
        ))}
      </div>
    </div>
  );
};

export default HeroSection;

