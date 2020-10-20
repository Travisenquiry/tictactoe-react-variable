import React from 'react';
import './BoardComponent.css';

const BoardComponent = (props) => {
    //Function to map the board state to create and render it into HTML
    const board = props.board.map((row,rowIndex) => {
        //Creates a single row
        const rows = row.map((col,colIndex) => {
            //Creates each column
            return (
                <span className="col" key={colIndex} onClick={props.winState === "" ? () => {props.squareClick(colIndex, rowIndex)} : undefined}>
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
            { props.gameStarted === "yes" ?
                <div className="instruction-display">
                    { props.winState === "" ?
                        <div className="current-player">
                            {props.currentPlayer}, choose a box to place an '{props.currentSymbol}' into:
                        </div> 
                        : props.winState === "Draw" ?
                        <div className="draw">
                            {props.winState}!, no one wins.
                        </div>
                        :
                        <div className="winner">
                            Congratulations {props.winState}!, You have won.
                        </div>
                    }
                    <div className="board">
                        {board}
                    </div>
                </div> : null
            }
        </div>
    )
}

export default BoardComponent;