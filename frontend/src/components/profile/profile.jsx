import React from 'react';
import { withRouter } from 'react-router-dom';

class Profile extends React.Component {  
    componentWillMount() {
        console.log(this.props.currentUser.id)
    } 
    
    render() {
        return (
            <div>
                <h2>All of This User's BizZams</h2>
            </div>
            );
        }
    }

export default withRouter(Profile);