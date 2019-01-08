import React from 'react';
import './pin_page.css';
import { Link } from 'react-router-dom';

class PinPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pin: null
        }
    }

    componentDidMount() {
        this.props.fetchUserGames(this.props.currentUser.id)
    }

    updatePin() {
        return e => this.setState({
          pin: e.currentTarget.value
        });
      }

    render() {
        if (this.props.games) {

            return (
                <div className='pin-page-div'>
                    Remember this pin
                    <br />
                    Pin: {' '} 
                    <div 
                        onClick={this.updatePin('pin')} 
                        value={this.state.pin}
                    >
                        {this.props.match.params.pin}
                        <br />
                    </div>
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