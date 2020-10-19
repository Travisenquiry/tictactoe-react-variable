import React, { useState, useEffect } from 'react';
import './BoardComponent.css';

const BoardComponent = (props) => {

    //Function to map the board state to create and render it into HTML
    const board = props.board.map((row,rowIndex) => {
        //Creates a single row
        const rows = row.map((col,colIndex) => {
            //Creates each column
            return (
                <span className="col" key={colIndex} onClick={() => {props.squareClick(colIndex, rowIndex);}}>
                [ {col} ]
                </span>
            );
        });
        //Returns the complete row
        return (
          <div key={rowIndex} className="row">
            {rows}
            <br />
          </div>
        );
    });

    useEffect(() => {
        //Function to map the board state to create and render it into HTML
        const board = props.board.map((row,rowIndex) => {
            //Creates a single row
            const rows = row.map((col,colIndex) => {
                //Creates each column
                return (
                    <span className="col" key={colIndex} onClick={() => {props.squareClick(colIndex, rowIndex);}}>
                    [ {col} ]
                    </span>
                );
            });
            //Returns the complete row
            return (
            <div key={rowIndex} className="row">
                {rows}
                <br />
            </div>
            );
        });
    }, [props.board]);

    return (
        <div className="board-div">
            {board}
        </div>
    )
}

export default BoardComponent;