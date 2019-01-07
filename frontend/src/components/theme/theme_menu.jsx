import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import './theme.css';

class ThemeMenu extends React.Component {

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