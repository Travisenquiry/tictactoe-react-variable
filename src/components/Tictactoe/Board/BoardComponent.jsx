import React from 'react';
import './BoardComponent.css';

const BoardComponent = (props) => {

    //Function to map the board state to create and render it into HTML
    const board = props.board.map((row,rowIndex) => {
        //Creates a single row
        const rows = row.map((col,colIndex) => {
            //Creates each column
            return (
                <span className="col" key={colIndex} onClick={() => {props.squareClick(colIndex, rowIndex)}}>
                [ {col} ]
                </span>
            );
        });
        //Returns the complete row
        return (
          <div key={rowIndex} className="row">
            {rows}
          </div>
        );
    });

    return (
         
        <div className="board-div">
            <div>
                {props.currentPlayer}, choose a box to place an '{props.currentSymbol}' into:
                {board}
            </div>
        </div>
    )
}

export default BoardComponent;