import React, { useState, useEffect } from 'react';
import './BoardComponent.css';

const BoardComponent = (props) => {

    //Creates the array required for the board based on the size declared
    let boardTemp = [];
    let boardRow = [];
    let boardCol = " ";
    
    //Creates 
    if(props.boardSize > 2 && props.boardSize < 10) {
        for(let i=0; i<props.boardSize; i++) {
            boardRow.push(boardCol);
        }
        for(let i=0; i<props.boardSize; i++) {
            boardTemp.push(boardRow);
        }
    }

    return (
        <div className="board-div">
            
        </div>
    )
}

export default BoardComponent;