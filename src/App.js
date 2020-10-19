import React, {useState} from 'react';
import './App.css';
import NameComponent from './components/Tictactoe/Option/NameComponent.jsx';
import BoardSizeComponent from './components/Tictactoe/Option/BoardSizeComponent.jsx';
import BoardComponent from './components/Tictactoe/Board/BoardComponent.jsx';


const App = () => {
	//Variables defined for players (Can be modified to be any amount)
	const [playerOne, setPlayerOne] = useState("");
	const [playerTwo, setPlayerTwo] = useState("");

	//Input onchange function to be passed to NameComponent to set parent state for player names
	const nameOnChangeFunction = (setPlayerName) => (e) => {
		setPlayerName(e.target.value);
	}

	return (
		<div className="container">
			<NameComponent playerIndex="1" nameOnChangeFunction={nameOnChangeFunction(setPlayerOne)}/>
			<br />
			<NameComponent playerIndex="2" nameOnChangeFunction={nameOnChangeFunction(setPlayerTwo)}/>
			<br />
			<BoardSizeComponent />
			<BoardComponent />
		</div>
	);
}

export default App;
