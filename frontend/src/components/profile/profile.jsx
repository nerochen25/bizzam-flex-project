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
            <div>
                <h2>All of This User's BizZams</h2>
                <form action="">
                Username:<input type='text' value={this.props.username} onChange={this.update('username')}/>
                <input type="submit" value="Submit Change"/>
                </form>
            </div>
            );
        }
    }

export default withRouter(Profile);