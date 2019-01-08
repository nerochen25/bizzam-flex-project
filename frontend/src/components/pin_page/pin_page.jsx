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

    updatePin() {
        return e => this.setState({
          pin: e.currentTarget.value
        });
      }

    render() {
        if (this.props.game) {
            return (
                <div className='pin-page-div'>
                    Remember this pin
                    <br />
                    Pin: {' '} 
                    <span onChange={this.updatePin('pin')} value={this.state.pin.pin}>{this.state.pin.pin}</span>
                </div>
            )
        } else {
            return (
                <div className='pin-page-div'>
                    <Link to='/create-game' className="">You have to create a game first</Link>
                </div>
            )
        }  
    }
}


export default PinPage;