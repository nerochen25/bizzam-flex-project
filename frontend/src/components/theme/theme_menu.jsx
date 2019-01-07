import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import './theme.css';

class ThemeMenu extends React.Component {

    render(){
        return (
            <div className="theme-links">
                <Link to={'/allThemes'} className="links">All Themes</Link>
                <Link to={'/newTheme'} className="links">Create A Theme</Link>
            </div>
            
        )
    }
}

export default withRouter(ThemeMenu);