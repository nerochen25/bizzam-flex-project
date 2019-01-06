import React from 'react';
import { withRouter } from 'react-router-dom';

class Profile extends React.Component {

	update(field) {
		return e => this.setState({ [field]: e.target.value });
	}

	render() {
		return <div>
				<div className="user-profile-container">
					Username:
					<input type="text" value={this.props.currentUser.username} onChange={this.update('username')} />
					<button>Submit</button>
				</div>
			</div>;
	}
}

export default withRouter(Profile);