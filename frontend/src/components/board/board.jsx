import React from 'react';
import { withRouter } from 'react-router-dom';
import './board.css';

class Board extends React.Component {
	constructor(props) {
        super(props);
        
        this.state = {
            row: 0,
            column: 0,
            createBoard: false
        };

        this.logoutUser = this.logoutUser.bind(this);
        this.updateRow = this.updateRow.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.populateSquares = this.populateSquares.bind(this);
	}

	logoutUser(e) {
		e.preventDefault();
		this.props.logout();
    }
    
    updateRow(){
        return e => this.setState({
            row: e.currentTarget.value
        });
    }

    updateColumn() {
        return e => this.setState({
            column: e.currentTarget.value
        });
    }

    handleClick(){
        // console.log(this.state.boardLength);
        if (this.state.row === this.state.column) {
            this.setState({
                createBoard: true
            });
        } else {
            alert("Row and column length should be the same.");
        }
    }

    populateSquares(){
        for(let i=0; i < this.state.row; i++){
            
        }
    }
    

	render() {
		return (<div>
				<div className="board">
					<h1 className="board-title">Board</h1>

					{ this.state.createBoard ? 
                        ( <div className="grid-container">
                            {this.populateSquares()}
							<div className="grid-item" />
							<div className="grid-item" />
							<div className="grid-item" />
							<div className="grid-item" />
							<div className="grid-item" />
							<div className="grid-item" />
							<div className="grid-item" />
							<div className="grid-item" />
							<div className="grid-item" />
						</div>  ) : <form onSubmit={this.handleClick} className="board-form">
							<label>
                            <span className="board-labels">Enter row length:</span>
                                
								<input type="number" onChange={this.updateRow()} className="board-inputs row-input" />
							</label>
							<br />
							<label className="board-labels">
								Enter column length:
								<input type="number" onChange={this.updateColumn()} className="board-inputs" />
							</label>
                            <br/>
							<input type="submit" value="Create the board" className="board-btn" />
						</form>}
				</div>
            </div>
        );
	}
}

export default withRouter(Board);