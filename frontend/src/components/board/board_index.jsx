import React from 'react';
import { withRouter } from 'react-router-dom';
import './board.css';
import BoardIndexItem from './board_index_item';

class BoardIndex extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			boards: []
		};
		
		this.logoutUser = this.logoutUser.bind(this);
	}

	componentDidMount() {
		this.props.fetchBoards();
	}

	componentDidUpdate(oldProps) {
		if (oldProps.boards !== this.props.boards) {
			this.setState({
				boardLoaded: true
			})
		}
		
	}

	logoutUser(e) {
		e.preventDefault();
		this.props.logout();
	}

	render() {
		let boards 
		if (this.props.boards) {
			boards = Object.values(this.props.boards).map(board => {
				return (
					<BoardIndexItem
						key={board._id}
						id={board._id}
						board={board}
						fetchboard={this.props.fetchboard}
					/>
				)
			})
		}

		

		return (
			<div>
				{boards}
			</div>
		);
	}
}

export default withRouter(BoardIndex);

	// this.updateRow = this.updateRow.bind(this);
	// this.handleClick = this.handleClick.bind(this);

	// updateRow() {
	// 	return e =>
	// 		this.setState({
	// 			row: e.currentTarget.value,
	// 		});
	// }

	// updateColumn() {
	// 	return e =>
	// 		this.setState({
	// 			column: e.currentTarget.value,
	// 		});
	// }

	// handleClick() {
	// 	if (this.state.row === this.state.column) {
	// 		this.setState({
	// 			createBoard: true,
	// 		});
	// 	} else {
	// 		alert('Row and column length should be the same.');
	// 	}
	// }