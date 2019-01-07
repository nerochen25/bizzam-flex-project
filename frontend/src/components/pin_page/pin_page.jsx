import React from 'react';
import './pin_page.css';

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
        debugger
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
                    create a game first
                    
                </div>
            )
        }
        
    }
}


export default PinPage;