import React from 'react';
import { withRouter } from 'react-router-dom';
import './board.css';

class Board extends React.Component {
	constructor(props) {
		super(props);

		this.logoutUser = this.logoutUser.bind(this);
	}

	logoutUser(e) {
		e.preventDefault();
		this.props.logout();
	}

	render() {
		return (
			<div>
				<h1 className="board-title">Board</h1>
                <div>
                    
                </div>
			</div>
		);
	}
}

export default withRouter(Board);