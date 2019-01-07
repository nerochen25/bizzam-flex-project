import React from 'react';
import { withRouter } from 'react-router-dom';
import './theme.css';
import ThemeMenuContainer from './theme_menu_container';
import { Link } from 'react-router-dom';

class ThemeIndex extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showThemes: false
        };

    }

    componentDidMount() {
        this.props.getThemes();
    }


    render() {
        let allThemes;

        if (this.props.themes) {
            allThemes = this.props.themes.map(theme => (
                <li><Link to={`/theme/${theme._id}/edit`}>{theme.name}</Link></li>
            ));
        }


        return (
            <div className="theme">
                <ThemeMenuContainer />

                <h1 className="theme-title">All Bizzams</h1>
                <ul>
                    {allThemes}
                </ul>
            </div>
        )
    }
}

export default withRouter(ThemeIndex);