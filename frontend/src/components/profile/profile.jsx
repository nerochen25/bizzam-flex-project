import React from 'react';
import { withRouter } from 'react-router-dom';

class Profile extends React.Component {  
    componentWillMount() {
        console.log(this.props.currentUser.id)
    } 

    update(field) {
        return e => this.setState({ [field]: e.target.value });
    };
    
    render() {
        return (
            <div className="user-profile-container">
                Username:<input type='text' value={this.props.username} onChange={this.update('username')}/>
                <button>Submit</button>
            </div>
            );
        }
    }

export default withRouter(Profile);