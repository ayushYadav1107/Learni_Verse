import React from 'react';
import GameBoard from './components/Mathgame/GameBoard';
import Header from './components/Mathgame/Header';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <GameBoard />
    </div>
  );
}

export default App;
