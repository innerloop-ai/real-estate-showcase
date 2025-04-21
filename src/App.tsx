import React from 'react';
import HeroSection from './components/HeroSection';
import PropertiesSection from './components/PropertiesSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="app">
      <header>
        <div className="container">
          <div className="header-content">
            <h1>Property<span className="highlight">Pulse</span></h1>
            <nav className="main-nav">
              <ul>
                <li><a href="#" className="active">Home</a></li>
                <li><a href="#">Properties</a></li>
                <li><a href="#">Agents</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main>
        <div className="container">
          <HeroSection />
          <div className="properties-container">
            <PropertiesSection />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;
