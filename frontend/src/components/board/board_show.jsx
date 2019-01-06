import React from 'react';
// import { withRouter } from 'react-router-dom';
import './board.css';


class BoardShow extends React.Component {
	constructor(props) {
		super(props);

		console.log(this.state);

    }
    
    componentDidMount(){
        
    }

	render() {
		return (
			<div className="board">
				<h1 className="board-title">Board</h1>
				<div className="grid-container">
					
				</div>
			</div>
		);
	}
}

export default BoardShow;
