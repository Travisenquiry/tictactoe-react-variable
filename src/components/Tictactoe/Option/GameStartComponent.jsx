import React from 'react';
import './GameStartComponent.css';

const GameStartComponent = (props) => {
    return (
        <div className="game-start-div">
           <button onClick={props.startGameFunction}>Game Start</button>
        </div>
    )
}

export default GameStartComponent;