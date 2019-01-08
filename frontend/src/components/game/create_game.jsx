import React from 'react';
// import { withRouter } from 'react-router-dom';
import './create_game.css';
import { Link } from 'react-router-dom'


class CreateGame extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            game: this.props.game,
            gameType: "Classic",
            boards: [],
            themeId: '',
            winnerId: null,
            errors: {},
            themes: this.props.themes,
            gamePin: null
        }
        
        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderErrors = this.renderErrors.bind(this);        
    } 

    componentWillReceiveProps(nextProps) {
        this.setState({errors: nextProps.errors});
    }

    componentDidMount() {
        this.props.getThemes();
        this.props.fetchBoards();
    }

  
    handleSubmit(e) {
      e.preventDefault();
      let game = {
        gameType: this.state.gameType,
        theme: this.state.themeId,
        creator_id: this.props.currentUser.id
      };
  
      this.props.createGame(game); 
      this.setState({errors: {}})
    }

    updateGameType() {
        return e => this.setState({
          gameType: e.currentTarget.value
        });
      }

    updateThemeId() {
        return e => this.setState({
            themeId: e.currentTarget.name,
            gamePin: e.currentTarget.value2
        });
    }

    updatePin() {
        return e => this.setState({
            gamePin: e.currentTarget.value2
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
    
        let gamePin;
        if (this.props.game) {
            gamePin = this.props.game.pin;
            
        } else {
            gamePin = null;
        }
        
        let themesOptions;
        if (this.props.themes[0].length > 1) {            
            themesOptions = this.props.themes[0].map((theme, idx) => {
                return (
                
                    <input  
                        className="themes-options-btn"
                        key={idx} 
                        type='submit' 
                        onClick={this.updateThemeId('themeId')} 
                        value={theme.name} 
                        name={theme._id}
                        value2={gamePin}
                    /> 
                 
                )
            })
        }
        
        return (
            <div className='create-game-div'>
                <div className="thumbnail-path">
                    <div className="pin-cart">
                        <Link to={`/pin-page/${gamePin}`} params={gamePin}>
                            <input className="create-game-btn" type='submit' value="Go to pin"/>
                        </Link>
                        {this.renderErrors()}
                    </div>
                </div>

                <div className="create-game-message">
                    <p>Let's create a new bizzam game now!</p>
                </div>
                <form onSubmit={this.handleSubmit} className='create-game-form'>
                    <p3 className='theme-message'>Choose your Theme:</p3>
                    <div className="themes-options-div">
                        {themesOptions}
                    </div>
                    
                </form>
                <br />
               
            </div>
        )
    }
}

export default CreateGame;


// Theme ID {" "}
// {this.state.themeId}
// <br />
// PIN {" "}
// {gamePin}