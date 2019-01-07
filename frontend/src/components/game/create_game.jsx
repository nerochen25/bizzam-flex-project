import React from 'react';
// import { withRouter } from 'react-router-dom';
import './create_game.css';


class CreateGame extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            gameType: "",
            boards: [],
            //hard-coding themeId for now, still waiting for theme component to pass theme_id over
            themeId: '5c2e9b3a2506593d64be02ef',
            winnerId: null,
            errors: {},
            themes: this.props.themes
        }
        
        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderErrors = this.renderErrors.bind(this);
    } 

    componentWillReceiveProps(nextProps) {
        this.setState({errors: nextProps.errors});
    }

    componentDidMount() {
        this.props.fetchThemes();
        this.props.fetchBoards();
    }

  
    handleSubmit(e) {
      e.preventDefault();
      let game = {
        gameType: this.state.gameType,
        theme: this.state.themeId
      };
  
      this.props.createGame(game); 
      this.setState({gameType: '', errors: {}})
    }

    updateGameType() {
        return e => this.setState({
          gameType: e.currentTarget.value
        });
      }

    updateThemeId() {
        return e => this.setState({
            themeId: e.currentTarget.value
        });
    }

    renderErrors() {
        return (
            <ul className="login-form-container">
                {Object.keys(this.state.errors).map((error, i) => (
                    <li key={`error-${i}`}>
                    {this.state.errors[error]}
                    </li>
                ))}
            </ul>
        )
    }
    render() {
        let themesOptions;
        if (this.props.themes.length > 4) {
            themesOptions = this.props.themes.map((theme, idx) => {
                return (
                 <option className="game-type-option" key={idx}>{theme.name}</option>
                )
            })
        }
        const gameTypeOptions = ['Adventure', 'Classic'].map((gameType, idx) => {            
            return (
              <option className="game-type-option" key={idx}>{gameType}</option>
            );
          });

        return (
            <div className='create-game-div'>
                <div className="create-game-message">
                <p>Let's create a board game now!</p>
                </div>
                <form onSubmit={this.handleSubmit} className='create-game-form'>
                    Game type:
                    <select className="game-type-select" onChange={this.updateGameType('gameType')} value={this.state.gameType}>
                        <option className='default-game-type-select'>Select your game type</option>
                        {gameTypeOptions}
                    </select>
                    <br />
                    <br />
                    Theme:
                    <select className="game-type-select" onChange={this.updateThemeId('themeId')} value={this.state.themeId}>
                        <option className='default-game-type-select'>Select your theme</option>
                        {themesOptions}
                    </select>
                    <br />
                    <br />
                    <input className="create-game-btn" type='submit' value="Create Game"/>
                </form>
                {this.renderErrors()}
            </div>
        )
    }
}

export default CreateGame;

/* <input className="theme-input" type='text' onChange={this.updateThemeId('themeId')} value={this.state.themeId}/>
<br />
<br />
<input className="create-game-btn" type='submit' value="Create Game"/> */