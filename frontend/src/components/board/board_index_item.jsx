import React from 'react';
// import { withRouter } from 'react-router-dom';
import './board.css';


const BoardIndexItem = ({key, id, board, selectBoard}) => {
		
	return (
		<div className="board" >
			
			<div className="grid-container" onClick={selectBoard}>
				<h1>{board.gameDescription.theme} started by {board.gameDescription.creator}</h1>
			</div>
		</div>
	);
}

export default BoardIndexItem;

