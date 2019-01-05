import React from 'react';
import { withRouter } from 'react-router-dom';
import './create_game.css';


class CreateGame extends React.Component {
    render() {
        console.log('create game');
        return (
            <div className='create-game-div'>
                <h1>CREATE GAME</h1>
            </div>
        )
    }
}

export default withRouter(CreateGame);