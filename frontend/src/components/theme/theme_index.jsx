import React from 'react';
import { withRouter } from 'react-router-dom';
import './theme.css';
import ThemeMenuContainer from './theme_menu_container';

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
        console.log("this.props.themes", this.props.themes);

        let allThemes;

        if (this.props.themes) {
            allThemes = this.props.themes.map(theme => (
                <li>{theme.name}</li>
            ))
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