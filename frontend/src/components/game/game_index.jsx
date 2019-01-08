import React from 'react';
import './game_index.css';
import { Link } from 'react-router-dom';

class GameIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pin: null,
            games: this.props.games,
            boards: this.props.boards,
        }
    }

    componentDidMount() {
        this.props.fetchUserGames(this.props.currentUser.id)
    }
    
    componentDidUpdate(oldProps) {
        if (oldProps.games !== this.props.games) {
            this.setState({
                games: this.props.games
            })
        }
    }

    updatePIN() {
        return e => this.setState({
            pin: e.currentTarget.value
        })
    }
    updateGameType() {
        return e => this.setState({
          gameType: e.currentTarget.value
        });
      }

    render() {
        let gameList = [];
        if (this.props.games.length >= 1) {
            gameList = this.props.games.map((game, idx) => {
                return (
                    <ul key={idx}>
                        <Link 
                            onClick={this.updatePIN()}
                            className="themes-options-btn" 
                            to={`/pin-page/${game.pin}`} 
                            key={idx}
                            params={game.pin}
                        >
                            {game.gameType} {' '} {'game with PIN: '} {game.pin}
                        </Link>
                    </ul>
                )
            })
        }
        return (
            <div className='game-index-div'>
                <h1>Welcome to BizZam!</h1>
                {gameList}
            </div>
        )
    }
}


export default GameIndex;