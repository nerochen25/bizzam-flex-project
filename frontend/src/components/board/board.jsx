import React from 'react';
import { withRouter, HashRouter, Switch, Route } from 'react-router-dom';
import './board.css';
import BoardIndex from './board_index'
import BoardShowContainer from './board_show_container'


class Board extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			board_id: null
		};
		
		this.logoutUser = this.logoutUser.bind(this);
		this.selectBoard = this.selectBoard.bind(this);
	}

	componentDidMount() {
		this.props.fetchBoards();
	}

	componentDidUpdate(oldProps) {
		if (oldProps.boards !== this.props.boards && !this.state.board_id) {
			this.setState({
				boardLoaded: true
			},
			() => {
				this.props.history.push('/board/index')
			})
		}
		
	}

	selectBoard(board_id){
		return() => {
			this.setState(
				{board_id: board_id},
				() => {
					this.props.history.push('/board/play')
				}
			)
		}
	}

	logoutUser(e) {
		e.preventDefault();
		this.props.logout();
	}

	render() {
		

		
		
		return (
			<div>
				<HashRouter>
					<Switch>
						<Route 
							path='/board/index' 
							component={() => <BoardIndex
								boards={this.props.boards} 
								selectBoard={this.selectBoard}
							/>} 
							
						/>
						<Route
							path='/board/play'
							component={() => <BoardShowContainer
								id={this.state.board_id}
							/>}
						/>
					</Switch>
				</HashRouter>
			</div>
		);
	}
}

export default withRouter(Board);

