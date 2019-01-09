import React from 'react'
import './join_game.css'
import board from './board';

class JoinGame extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            pin: ''
        }
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(e) {
        return e => this.setState({
            pin: e.currentTarget.value
        })
    }

    async handleSubmit(e) {

        e.preventDefault();

        let response = await this.props.postBoard({
            user_id: this.props.currentUser.id,
            pin: this.state.pin
        })
        
        this.props.selectBoard(response.board.data._id)()
    }

    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit} className="pin-form">
                    <h3 className='pin-title'>Enter a Pin</h3>
                    <label>
                        <input className="pin-title" type="text" value={this.state.pin}  placeholder='PIN' onChange={this.handleInput()}/>
                    </label>
                    <input className="submit-pin-btn" type='submit' value="Join Game"/>     
                </form>
                
            </div>
        )
    }

}


export default JoinGame