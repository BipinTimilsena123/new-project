import React from 'react';
import Navbar from '../src/components/navbar.js';
import HeroSection from '../src/components/heroSection.js';
import Footer from '../src/components/footer.js';

function App() {
  return (
    <div>
      <Navbar />
      <div style={{ padding: '20px' }}>
        <input type="text" placeholder="Search..." style={{ width: '100%', padding: '10px' }} />
      </div>
      <HeroSection />
      <Footer />
    </div>
  );
}

export default App;

