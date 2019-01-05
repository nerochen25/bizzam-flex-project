import React from 'react';
// import { withRouter } from 'react-router-dom';
import './create_game.css';


class CreateGame extends React.Component {
    constructor(props) {
        super(props);
  
        this.state = {
            gameType: "",
            newGame: ""
        }
  
        this.handleSubmit = this.handleSubmit.bind(this);
    } 

    componentWillReceiveProps(nextProps) {
        this.setState({newGame: nextProps.newGame.gameType});
    }
  
    handleSubmit(e) {
      e.preventDefault();
      let game = {
        gameType: this.state.gameType
      };
  
      this.props.createGame(game); 
      this.setState({gameType: ''})
    }

    updateGameType() {
        return e => this.setState({
          gameType: e.currentTarget.value
        });
      }

    updateNewGame() {
    return e => this.setState({
        newGame: e.currentTarget.value
    });
    }

    render() {
        return (
            <div className='create-game-div'>
                <h1>CREATE GAME</h1>
                <form onSubmit={this.handleSubmit}>
                    Game type: {' '}
                    <input type='text' value={this.state.gameType} onChange={this.updateGameType()} placeholder="Enter game type"/>
                    <br />
                    Theme: {' '}
                    <input type='text' value={this.state.newGame} onChange={this.updateNewGame()} placeholder="Enter theme"/>
                    <br />
                    <input type='submit' value="Create Game"/>
                </form>
            </div>
        )
    }
}

export default CreateGame;