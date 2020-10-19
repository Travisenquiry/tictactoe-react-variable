import React from 'react';
import './BoardSizeComponent.css';

const BoardSizeComponent = () => {
    return (
        <div className="board-size-input-div">
            Board Size (Enter a number)
            <input className="board-size" defaultValue="3"></input>
        </div>
    )
}

export default BoardSizeComponent;