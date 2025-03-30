import React from 'react';
import GameBoard from './components/GameBoard';
import Header from './components/Header';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <GameBoard />
    </div>
  );
}

export default App;