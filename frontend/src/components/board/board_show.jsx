import React from 'react';
// import { withRouter } from 'react-router-dom';
import './board.css';


class BoardShow extends React.Component {
	constructor(props) {
		super(props)
		this.state = {}
    }
    
    componentDidMount(){
        if (this.props.boards[this.props.id]) {
			this.setState({
				board: this.props.boards[this.props.id]
			})
		} else {
			this.props.fetchBoard(this.props.id)
		}
	}
	
	componentDidUpdate() {
		if (this.props.boards[this.props.id]) {
			this.setState({
				board: this.props.boards[this.props.id]
			})
		}
	}

	render() {

		let squares

		if (this.state.board) {
			squares = this.state.board.squares.map((square) => {
				return (
					<Square
						key={square.position}
						text={square.text}
						checked={square.checked}
						action={() => (
							this.props.selectSquare(this.state.board.id, square.position)
						)}
					/>
				)
			})
		}

		return (
			<div className="board">
				<h1 className="board-title">Board</h1>
				<div className="grid-container">
					{squares}
				</div>
			</div>
		);
	}
}

export default BoardShow;
