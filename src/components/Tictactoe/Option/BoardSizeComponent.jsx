import React from 'react';
import './BoardSizeComponent.css';

const BoardSizeComponent = (props) => {
    return (
        <div className="board-size-input-div">
            Board Size (Enter a number between 3 and 9)
            <input className="board-size" defaultValue={props.defaultBoardSize} onChange={props.boardSizeOnChangeFunction}></input>
        </div>
    )
}

export default BoardSizeComponent;