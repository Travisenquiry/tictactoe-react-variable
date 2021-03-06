import React, {useState} from 'react';
import './App.css';
import NameComponent from './components/Tictactoe/Option/NameComponent.jsx';
import BoardSizeComponent from './components/Tictactoe/Option/BoardSizeComponent.jsx';
import GameStartComponent from './components/Tictactoe/Option/GameStartComponent.jsx';
import BoardComponent from './components/Tictactoe/Board/BoardComponent.jsx';

const App = () => {
	//Variables defined for players (Can be modified to be any amount of players)
	const [currentPlayer, setCurrentPlayer] = useState("");
	const [currentSymbol, setCurrentSymbol] = useState("");
	const [playerOne, setPlayerOne] = useState("");
	const [playerTwo, setPlayerTwo] = useState("");
	
	//Variables defined for options and status of the game
	const [boardSize, setBoardSize] = useState(3);
	const [gameStarted, setGameStarted] = useState("no");
	const [errorMessage, setErrorMessage] = useState("");

	//Variables for the board and win state
	const [winState, setWinState] = useState("");
	const [board, setBoard] = useState([]);

	//Input onchange function to be passed to NameComponent and BoardSizeComponent to set parent state for player names and size of board
	const onChangeFunction = (setValue) => (e) => {
		setValue(e.target.value);
	}

	//Error check function on options to be called upon clicking on game start button
	const errorCheckFunction = () => {
		//Checks if names and board size are empty
		if(playerOne.trim() === "" || playerTwo.trim() === "" || boardSize.toString().trim() === "") {
			setErrorMessage("Please enter all options");
			return false;
		}

		//Checks if names entered consists of any symbol or number
		if(!playerOne.match(/^[A-Za-z\s]+$/) || !playerTwo.match(/^[A-Za-z\s]+$/)){
			setErrorMessage("Only alphabets and space are allowed as names");
			return false;
		}

		//Checks if player names are the same
		if(playerOne === playerTwo){
			setErrorMessage("Please enter a different name for both players");
			return false;
		}

		//Checks if board size entered is an integer
		if(isNaN(boardSize)){
			setErrorMessage("Please enter a number for board size");
			return false;
		}

		//Checks if board size entered is between 3 and 9
		if (boardSize < 3 || boardSize > 9){
			setErrorMessage("Please enter a board size between 3 and 9");
			return false;
		}

		//Resets error message to empty and return true if passes error check
		setErrorMessage("");
		return true;
	}

	//Game starting function to be passed to GameStartComponent to set parent state for starting game on click
	const startGameFunction = () => {
		//Conditional to check if input passes the error check
		if(errorCheckFunction() === true){
			//Initialization of the game
			setGameStarted("yes");
			setCurrentPlayer(playerOne);
			setCurrentSymbol("o");

			//Creates the array required for the board based on the size declared
			let boardTemp = [];
			let boardRow = [];
			//Pushes and create the board based on the board size input
			//Prevents the user from choosing size less than 2 and more than 9 for neatness purpose
			if(boardSize > 2 && boardSize < 10) {
				for(let i=0; i<boardSize; i++) {
					boardRow.push("-");
				}
				for(let i=0; i<boardSize; i++) {
					let boardCloneRow = [...boardRow];
					boardTemp.push(boardCloneRow);
				}
			}
			//Sets and initialize the state of the board with the complete array
			setBoard(boardTemp);
		}
	}

	//Function to check for win state
	const calculateWinner = (currentBoard) => {
		//Check for draw
		let boardClone = [...board].flat(1);
		if(boardClone.includes("-") === false){
			setWinState("Draw");
		}

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

		//Check for win state by diagonally upwards
		for(let i=2; i<currentBoard.length; i++){
			for(let j=0; j<currentBoard[i].length; j++){
				if(currentBoard[i][j] === currentBoard[i-1][j+1] && currentBoard[i][j] === currentBoard[i-2][j+2] && currentBoard[i][j] === "o"){
					setWinState(playerOne);
				}else if(currentBoard[i][j] === currentBoard[i-1][j+1] && currentBoard[i][j] === currentBoard[i-2][j+2] && currentBoard[i][j] === "x"){
					setWinState(playerTwo);
				}
			}
		}
	}

	//Function to be passed into BoardComponent for squares to change symbols
	const squareClick = (column, row) => {
		//Clones a copy of the board state to be mutated
		let editBoard = [...board];

		//Checks which is the current player and if the square is empty
        if(currentPlayer === playerOne && editBoard[row][column] === "-"){
			editBoard[row][column] = "o";
			setCurrentPlayer(playerTwo);
			setCurrentSymbol("x");
        }else if(currentPlayer === playerTwo && editBoard[row][column] === "-"){
			editBoard[row][column] = "x";
			setCurrentPlayer(playerOne);
			setCurrentSymbol("o");
		}
		
		//Sets the board state to be the new state and calculate if there is a winner
		setBoard(editBoard);
		calculateWinner(board);
	}

	return (
		<div className="container">
			<div className="header">
				Tic tac toe
			</div>
			{ gameStarted === "no" ? 
				<div className="options">
					<NameComponent playerIndex="1" nameOnChangeFunction={onChangeFunction(setPlayerOne)}/>
					<br />
					<NameComponent playerIndex="2" nameOnChangeFunction={onChangeFunction(setPlayerTwo)}/>
					<br />
					<BoardSizeComponent defaultBoardSize={boardSize} boardSizeOnChangeFunction={onChangeFunction(setBoardSize)}/>
					<br />
					<GameStartComponent startGameFunction={startGameFunction}/>
					<div className="error-message">
						{errorMessage}
					</div>
				</div> 
				: null 
			}
			<BoardComponent boardSize={boardSize} board={board} squareClick={squareClick} currentPlayer={currentPlayer} currentSymbol={currentSymbol} gameStarted={gameStarted} winState={winState}/>
		</div>
	);
}

export default App;
