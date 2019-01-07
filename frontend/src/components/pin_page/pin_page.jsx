import React from 'react';
import './pin_page.css';
import { Link } from 'react-router-dom'

class PinPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pin: this.props.game,
        }
    }
    pinGenerator() {
        
    }

    render() {
        if (this.props.game) {
            return (
                <div className='pin-page-div'>
                    Remember this pin
                    <br />
                    Pin: {' '} {this.state.pin.pin}
                </div>
            )
        } else {
            return (
                <div className='pin-page-div'>
                    <Link to='/create-game'>You have to create a game first</Link>
                </div>
            )
        }
        
    }
}


export default PinPage;