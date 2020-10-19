import React, {useState} from 'react';
import './App.css';
import NameComponent from './components/Tictactoe/Option/NameComponent.jsx';
import BoardSizeComponent from './components/Tictactoe/Option/BoardSizeComponent.jsx';
import GameStartComponent from './components/Tictactoe/Option/GameStartComponent.jsx';
import BoardComponent from './components/Tictactoe/Board/BoardComponent.jsx';


const App = () => {
	//Variables defined for players (Can be modified to be any amount)
	const [playerOne, setPlayerOne] = useState("");
	const [playerTwo, setPlayerTwo] = useState("");
	
	//Variables defined for options
	const [boardSize, setBoardSize] = useState(3);
	const [gameStarted, setGameStarted] = useState("no");


	//Input onchange function to be passed to NameComponent to set parent state for player names
	const onChangeFunction = (setValue) => (e) => {
		setValue(e.target.value);
	}

	//Game starting function to be passed to GameStartComponent to set parent state for starting game on click
	const startGameFunction = (e) => {
		setGameStarted("yes");
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
				<BoardComponent />
				</div> 
				: null 
			}
		</div>
	);
}

export default App;
