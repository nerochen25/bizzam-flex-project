import React from 'react';
import { withRouter } from 'react-router-dom';
import './theme.css';
import ThemeMenuContainer from './theme_menu_container';

class Theme extends React.Component {
	constructor(props) {
        super(props);
        
        const {name, description} = this.props.theme;
        this.state = {name, description};
        
        if(this.props.theme._id) {
            this.state.id = this.props.theme._id;
        }

        if(this.props.theme.themeItems) {
            this.state.items = this.props.theme.themeItems.map(i => i.text).join(',');
        }
        
        this.updateName = this.updateName.bind(this);
        this.updateDescription = this.updateDescription.bind(this);
        this.updateItems = this.updateItems.bind(this);    
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    updateName(){
        return e => this.setState({
            name: e.currentTarget.value
        });
    }

    updateDescription(){
        return e => this.setState({
            description: e.currentTarget.value
        });
    }

    updateItems() {
        return e => this.setState({
            items: e.currentTarget.value
        });
    }    

    handleSubmit(e) {
        e.preventDefault();

        this.props.postTheme(this.state);
        this.props.history.push('/allThemes');
      }    

	render() {

		return <div className="theme">
				<ThemeMenuContainer />
                				
                <h1 className="theme-title">{ this.props.formType} Bizzam</h1>

				<div className="theme-grid">
					<form onSubmit={this.handleSubmit} className="theme-form">
						<div>
							<label className="theme-labels">
								<span>Theme title</span>
								<input type="text" value={this.state.name} onChange={this.updateName()} className="theme-input theme-input-1" placeholder="Enter theme title"/>
							</label>
						</div>

						<div>
							<label className="theme-labels">
								<span>Theme description</span>
								<input type="text" value={this.state.description} onChange={this.updateDescription()} className="theme-input" placeholder="Enter theme description" />
							</label>
						</div>

						<div>
							<label className="theme-labels item-label">
								<span>Bizzam Items</span>
								<input type="text" value={this.state.items} onChange={this.updateItems()} className="theme-input item-input" placeholder="Enter items separated by comma." />
							</label>
						</div>

						<input type="submit" value="Save Bizzam" className="theme-btn" />
					</form>
				</div>
			</div>;
    }
}

export default withRouter(Theme);