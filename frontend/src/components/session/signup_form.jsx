import React from 'react';
import { withRouter } from 'react-router-dom';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      password2: '',
      errors: {}
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearedErrors = false;
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.signedIn === true) {
      this.props.history.push('/login');
    }

    this.setState({errors: nextProps.errors});
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    let user = {
      username: this.state.username,
      password: this.state.password,
      password2: this.state.password2
    };

    this.props.signup(user, this.props.history); 
  }

  renderErrors() {
    return(
      <ul className="form-errors">
        {Object.keys(this.state.errors).map((error, i) => (
          <li key={`error-${i}`}>
            {this.state.errors[error]}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return <div className="signup-form-container">
			<form onSubmit={this.handleSubmit} className="signup-form">
				<div>
					<br />

					<br />
					<label className="labels">
						USERNAME
						<input type="text" value={this.state.username} onChange={this.update('username')} placeholder="Username" className="input-fields input-field-1" />
					</label>
					<br />
					<label className="labels">
						PASSWORD
						<input type="password" value={this.state.password} onChange={this.update('password')} placeholder="Password" className="input-fields input-field-1" />
					</label>
					<br />
					<label className="labels">
						CONFIRM PASSWORD
						<input type="password" value={this.state.password2} onChange={this.update('password2')} placeholder="Confirm Password" className="input-fields" />
					</label>
					<br />

					<br />
					<input type="submit" value="Submit" className="form-btn"/>
					{this.renderErrors()}
				</div>
			</form>
		</div>;
  }
}

export default withRouter(SignupForm);