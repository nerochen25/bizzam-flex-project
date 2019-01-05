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

	componentWillMount() {
		this.props.fetchBoards();
	}

	componentWillReceiveProps(newState) {
		console.log("inside components: ", newState);
		this.setState({ boards: newState.boards });
		
	}

	logoutUser(e) {
		e.preventDefault();
		this.props.logout();
	}

	render() {

		console.log('boards', this.state);
		let boards = this.props.boards.map(board => {
			return (
				<BoardIndexItem
					key={board._id}
					id={board._id}
					board={board}
					fetchboard={this.props.fetchboard}
				/>
			)
		});

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