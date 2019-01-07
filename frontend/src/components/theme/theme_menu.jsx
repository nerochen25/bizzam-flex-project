import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import './theme.css';

class ThemeMenu extends React.Component {
    // constructor(props){
    //     super(props);

    //     this
    // }
    render(){
        return (
            <div>
                <Link to={'/allThemes'}>All Themes</Link>
                <Link to={'/newTheme'}>Create A Theme</Link>
            </div>
            
        )
    }
}

export default withRouter(ThemeMenu);