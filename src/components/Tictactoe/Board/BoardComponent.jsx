import React, { useState, useEffect } from 'react';
import './BoardComponent.css';

const BoardComponent = (props) => {
    const board = props.board.map( (row,rowIndex) => {
        // make a single row
        const rows = row.map( (col,colIndex) => {
        // make each column
            return (
                <span className="col" key={colIndex}>
                [ {col} ] <ln />
                </span>
            );
        });
        // return the complete row
        return (
          <div key={rowIndex} className="row">
            {rows}
            <br />
          </div>
        );
    });

    return (
        <div className="board-div">
            {board}
        </div>
    )
}

export default BoardComponent;