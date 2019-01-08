import React from 'react';
// import { withRouter } from 'react-router-dom';
import './board.css';


const BoardIndexItem = ({key, id, board, selectBoard}) => {
		
	return (
		<div className="board" >
			<h1 className="board-title">{id}</h1>
				<div className="grid-container" onClick={selectBoard}>
					{/* {this.populateSquares()} */}
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

