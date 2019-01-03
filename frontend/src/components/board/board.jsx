import React from 'react';
import { withRouter } from 'react-router-dom';

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
				<h1>Hello I am board!</h1>
			</div>
		);
	}
}

export default withRouter(Board);