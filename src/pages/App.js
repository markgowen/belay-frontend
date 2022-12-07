import React from 'react';
import '../styling/App.css';
import NavBar from '../components/NavBar';
import Discover from './Discover';

function App() {
  return (
    <div>
      <header>
        <div>
          <NavBar />
          <Discover />
        </div>
      </header>
    </div>
  );
}

export default App;
