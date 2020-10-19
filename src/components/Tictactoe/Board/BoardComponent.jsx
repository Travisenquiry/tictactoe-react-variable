import React, { useState, useEffect } from 'react';
import './BoardComponent.css';

const BoardComponent = (props) => {
    //Variables for the board and the win state
    const [winState, setWinState] = useState("");
    const [board, setBoard] = useState("");

    //Creates the array required for the board based on the size declared
    let boardTemp = [];
    let boardRow = [];
    let boardCol = " ";
    
    if(props.boardSize > 3 && props.boardSize < 10) {
        for(let i=0; i<props.boardSize; i++) {
            boardRow.push(boardCol);
        }
        for(let i=0; i<props.boardSize; i++) {
            boardTemp.push(boardRow);
        }
    }
    console.log(boardTemp);

    return (
        <div className="board-div">
            
        </div>
    )
}

export default BoardComponent;