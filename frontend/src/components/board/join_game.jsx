import React from 'react'

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

    handleSubmit(e) {
        e.preventDefault();

        this.props.postBoard({
            user_id: this.props.currentUser.id,
            pin: this.state.pin
        })
    }

    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        <span>Enter a Pin</span>
                        <input type="text" value={this.state.pin}  placeholder='PIN' onChange={this.handleInput()}/>
                    </label>
                    <input className="create-game-btn" type='submit' value="Join Game"/>     
                </form>
                
            </div>
        )
    }

}


export default JoinGame