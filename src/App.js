import React from 'react';
import './App.css';
import NameComponent from './components/Tictactoe/Name/NameComponent.jsx';
import BoardComponent from './components/Tictactoe/Board/BoardComponent.jsx';

const App = () => {
  return (
    <div className="container">
      <NameComponent />
      <BoardComponent />
    </div>
  );
}

export default App;
