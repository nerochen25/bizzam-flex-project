import React from 'react';
// import { withRouter } from 'react-router-dom';
import './board.css';


class BoardIndexItem extends React.Component {
	constructor(props) {
		super(props);

		console.log(this.state);

	}

	render() {
		return (
			<div className="board">
				<h1 className="board-title">Board</h1>
				<div className="grid-container">
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
}

export default BoardIndexItem;

			// this.populateSquares = this.populateSquares.bind(this);
	// populateSquares(){
	//     for(let i=0; i < this.state.row; i++){

	//     }
	// }