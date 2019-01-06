import React from 'react';
// import { withRouter } from 'react-router-dom';
import Square from './square'

import './board.css';

// props: :id, :selectSquare
class BoardShow extends React.Component {
	constructor(props) {
		super(props)
		this.state = {}
		this.handleClick = this.handleClick.bind(this)
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

	componentWillReceiveProps() {

	}
	
	componentDidUpdate(oldProps) {
		if (this.props.boards[this.props.id] !== oldProps.boards[this.props.id]) {
			this.setState({
				board: this.props.boards[this.props.id]
			})
		}
	}

	handleClick(id, position) {
		return () => {
			this.props.selectSquare(id, position)
		}
		
	}
	

	render() {

		let squares

		if (this.state.board) {
			squares = this.state.board.squares.map((square) => {
				
				return (
					<Square
						key={square.position}
						position={square.position}
						text={square.text}
						checked={square.checked}
						action={this.handleClick(this.state.board._id, square.position)}
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
