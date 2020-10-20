import React, {useState} from 'react';
import './App.css';
import NameComponent from './components/Tictactoe/Option/NameComponent.jsx';
import BoardSizeComponent from './components/Tictactoe/Option/BoardSizeComponent.jsx';
import GameStartComponent from './components/Tictactoe/Option/GameStartComponent.jsx';
import BoardComponent from './components/Tictactoe/Board/BoardComponent.jsx';


const App = () => {
	//Variables defined for players (Can be modified to be any amount)
	const [currentPlayer, setCurrentPlayer] = useState("");
	const [currentSymbol, setCurrentSymbol] = useState("");
	const [playerOne, setPlayerOne] = useState("");
	const [playerTwo, setPlayerTwo] = useState("");
	
	//Variables defined for options
	const [boardSize, setBoardSize] = useState(3);
	const [gameStarted, setGameStarted] = useState("no");

	//Variables for the board with default value and the win state
	const [winState, setWinState] = useState("");
	const [board, setBoard] = useState([]);

	//Input onchange function to be passed to NameComponent to set parent state for player names
	const onChangeFunction = (setValue) => (e) => {
		setValue(e.target.value);
	}

	//Game starting function to be passed to GameStartComponent to set parent state for starting game on click
	const startGameFunction = () => {
		setGameStarted("yes");
		setCurrentPlayer(playerOne);
		setCurrentSymbol("o");
		//Creates the array required for the board based on the size declared
		let boardTemp = [];
		let boardRow = [];
		
		//Pushes and create the board based on the board size input
		//Prevents the user from choosing size less than 2 and more than 9
		if(boardSize > 2 && boardSize < 10) {
			for(let i=0; i<boardSize; i++) {
				boardRow.push("-");
			}
			for(let i=0; i<boardSize; i++) {
				let boardCloneRow = [...boardRow];
				boardTemp.push(boardCloneRow);
			}
		}
		setBoard(boardTemp);
	}

	//Function to check for win state
	const calculateWinner = (currentBoard) => {
		//Checks for win state by rows
		for(let i=0; i<currentBoard.length; i++){
			for(let j=0; j<currentBoard[i].length-2; j++){
				if(currentBoard[i][j] === currentBoard[i][j+1] && currentBoard[i][j] === currentBoard[i][j+2] && currentBoard[i][j] === "o"){
					setWinState(playerOne);
				}else if(currentBoard[i][j] === currentBoard[i][j+1] && currentBoard[i][j] === currentBoard[i][j+2] && currentBoard[i][j] === "x"){
					setWinState(playerTwo);
				}
			}
		}

		//Check for win state by column
		for(let i=0; i<currentBoard.length-2; i++){
			for(let j=0; j<currentBoard[i].length; j++){
				if(currentBoard[i][j] === currentBoard[i+1][j] && currentBoard[i][j] === currentBoard[i+2][j] && currentBoard[i][j] === "o"){
					setWinState(playerOne);
				}else if(currentBoard[i][j] === currentBoard[i+1][j] && currentBoard[i][j] === currentBoard[i+2][j] && currentBoard[i][j] === "x"){
					setWinState(playerTwo);
				}
			}
		}

		//Check for win state by diagonally downwards
		for(let i=0; i<currentBoard.length-2; i++){
			for(let j=0; j<currentBoard[i].length-2; j++){
				if(currentBoard[i][j] === currentBoard[i+1][j+1] && currentBoard[i][j] === currentBoard[i+2][j+2] && currentBoard[i][j] === "o"){
					setWinState(playerOne);
				}else if(currentBoard[i][j] === currentBoard[i+1][j+1] && currentBoard[i][j] === currentBoard[i+2][j+2] && currentBoard[i][j] === "x"){
					setWinState(playerTwo);
				}
			}
		}
	}

	//Function to be passed into BoardComponent for squares to change symbols
	const squareClick = (column, row) => {
		console.log( column, row );
		let editBoard = [...board];
        if(currentPlayer === playerOne && editBoard[row][column] === "-"){
			editBoard[row][column] = "o";
			setCurrentPlayer(playerTwo);
			setCurrentSymbol("x");
        }else if(currentPlayer === playerTwo && editBoard[row][column] === "-"){
			editBoard[row][column] = "x";
			setCurrentPlayer(playerOne);
			setCurrentSymbol("o");
        }
		setBoard(editBoard);
		calculateWinner(board);
		console.log(board);
		console.log(winState);
	}


	return (
		<div className="container">
			{ gameStarted === "no" ? 
				<div className="options">
				<NameComponent playerIndex="1" nameOnChangeFunction={onChangeFunction(setPlayerOne)}/>
				<br />
				<NameComponent playerIndex="2" nameOnChangeFunction={onChangeFunction(setPlayerTwo)}/>
				<br />
				<BoardSizeComponent defaultBoardSize={boardSize} boardSizeOnChangeFunction={onChangeFunction(setBoardSize)}/>
				<br />
				<GameStartComponent startGameFunction={startGameFunction}/>

				</div> 
				: null 
			}
			<BoardComponent boardSize={boardSize} board={board} squareClick={squareClick} currentPlayer={currentPlayer} currentSymbol={currentSymbol} gameStarted={gameStarted} winState={winState}/>
		</div>
	);
}

export default App;
