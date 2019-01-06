import React from 'react';
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
            {display}
            <div>
                
            </div>
        </div>
    )
}

export default BoardIndex