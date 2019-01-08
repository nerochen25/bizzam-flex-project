import React from 'react';
// import { withRouter } from 'react-router-dom';
import './board.css';


const BoardIndexItem = ({key, id, board, selectBoard}) => {
	debugger
	return (
		<div className="board" >
			
				<h1>{board.gameDescription.theme} started by {board.gameDescription.creator}</h1>
			<div className="grid-container" onClick={selectBoard}>
				<div className="grid-item" />
				<div className="grid-item" />
				<div className="grid-item" />
				<div className="grid-item" />
				<div className="grid-item" />
				<div className="grid-item" />
				<div className="grid-item" />
				<div className="grid-item" />
				<div className="grid-item" />
			</div>
		</div>
	);
}

export default BoardIndexItem;

