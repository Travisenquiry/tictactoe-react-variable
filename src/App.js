import React from 'react';
import './App.css';
import NameComponent from './components/Tictactoe/Option/NameComponent.jsx';
import BoardComponent from './components/Tictactoe/Board/BoardComponent.jsx';

const App = () => {
  return (
    <div className="container">
      <NameComponent player="Player 1"/>
      <NameComponent player="Player 2"/>
      <BoardComponent />
    </div>
  );
}

export default App;
