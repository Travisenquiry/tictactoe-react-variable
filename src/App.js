import React, {useState} from 'react';
import './App.css';
import NameComponent from './components/Tictactoe/Option/NameComponent.jsx';
import BoardSizeComponent from './components/Tictactoe/Option/BoardSizeComponent.jsx';
import GameStartComponent from './components/Tictactoe/Option/GameStartComponent.jsx';
import BoardComponent from './components/Tictactoe/Board/BoardComponent.jsx';


const App = () => {
	//Variables defined for players (Can be modified to be any amount)
	const [boardSize, setBoardSize] = useState(3);
	const [playerOne, setPlayerOne] = useState("");
	const [playerTwo, setPlayerTwo] = useState("");


	//Input onchange function to be passed to NameComponent to set parent state for player names
	const onChangeFunction = (setValue) => (e) => {
		setValue(e.target.value);
	}

	return (
		<div className="container">
			<NameComponent playerIndex="1" nameOnChangeFunction={onChangeFunction(setPlayerOne)}/>
			<br />
			<NameComponent playerIndex="2" nameOnChangeFunction={onChangeFunction(setPlayerTwo)}/>
			<br />
			<BoardSizeComponent defaultBoardSize={boardSize} boardSizeOnChangeFunction={onChangeFunction(setBoardSize)}/>
			<br />
			<GameStartComponent />
			<BoardComponent />
		</div>
	);
}

export default App;
