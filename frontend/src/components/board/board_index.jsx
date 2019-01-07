import React from 'react';
import {Link} from 'react-router-dom'

import BoardIndexItem from './board_index_item';

const BoardIndex = ({boards, selectBoard, dummy}) => {
    let display 
    if (boards) {
        display = Object.values(boards).map(board => {
            
            return (
                <BoardIndexItem
                    key={board._id}
                    id={board._id}
                    board={board}
                    selectBoard={selectBoard(board._id)}
                />
            )
        })
    }
    
    return(
        <div>
            <div>
                <Link to='/board/join'> Join a New Game</Link>
            </div>
            {display}
        </div>
    )
}

export default BoardIndex