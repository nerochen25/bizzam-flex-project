import React from 'react';
// import { withRouter } from 'react-router-dom';
import './board.css';


const BoardIndexItem = ({key, id, board, selectBoard}) => {
	return (
		<div className="board" >
			
				<h2 className="board-theme-name">{board.gameDescription.theme}</h2> 
				<br/>
				<p className="board-theme-creator">started by {board.gameDescription.creator}</p>

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

