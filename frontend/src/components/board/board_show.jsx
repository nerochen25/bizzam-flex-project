import React from 'react';
// import { withRouter } from 'react-router-dom';
import Square from './square';

import './board.css';

// props: :id, :selectSquare
class BoardShow extends React.Component {
	constructor(props) {
		super(props);
		this.state = { 
			gameOver: false,
			gameWon :false,
			isAnimating: false
		};
		this.handleClick = this.handleClick.bind(this);
    }
    
    componentDidMount(){
		
        if (this.props.boards[this.props.id]) {
			this.setState({
				board: this.props.boards[this.props.id]
			});
		} else {
			this.props.fetchBoard(this.props.id);
		}
	}

	componentWillReceiveProps() {

	}
	
	componentDidUpdate(oldProps, prevState) {
		if (this.props.boards[this.props.id] !== oldProps.boards[this.props.id]) {
			this.setState({
				board: this.props.boards[this.props.id],
				isAnimating: false,
				gameOver: false,
				gameWon: false
			});
		}
		if(prevState.isAnimating){
			return;
		}
		if (!this.state.board.gameOn) {
			this.setState({
				isAnimating: true
			});
			setTimeout(() => this.setState({
				gameOver: true,
				gameWon: false
			}));
		} else if (this.state.board.won) {
			this.setState({ 
				isAnimating: true 
			});
			setTimeout(() => this.setState({ 
				gameOver: true, 
				gameWon: true }));
		}
	}

	handleClick(id, position) {
		return () => {
			this.props.selectSquare(id, position);
		};
		
	}

	render() {

		let squares;

		let won;

		if(this.state.board){
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
			});
		}else {
			if(this.state.gameWon) {
				won = <div className="message-won">
					<p>Congratulations You Have Won!</p>
					</div>;
			} else {
				won = <div className="message-won">Oh no! Someone beat you to it. GAME OVER</div>;
			}
		}

		return <div className="board">
				<h1 className="board-title-1">Board</h1>
				<div className={`grid-container board-containter ${this.state.isAnimating ? 'isWon' : ' '}`}>{won ? won : squares}</div>
				<div className="grid-container board-containter">{won ? won : ''}</div>
			</div>;
	}
}

export default BoardShow;
