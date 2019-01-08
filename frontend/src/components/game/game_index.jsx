import React from 'react';
import './game_index.css';
import { Link } from 'react-router-dom'

class GameIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            games: this.props.games,
            boards: this.props.boards
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

    render() {
        let gameList = [];
        if (this.props.games.length >= 1) {
            gameList = this.props.games.map((game, idx) => {
                return (
                    <ul>
                        <Link className="themes-options-btn" to='/pin-page' key={idx}>{game.gameType} {' '} {idx}</Link>
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