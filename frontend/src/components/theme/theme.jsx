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
        
        // if(this.props.newTheme) {
        //     // this.state.formThemeTitle = this.props.;
        //     console.log("New Theme is available");
        // }
        

        this.updateThemeBody = this.updateThemeBody.bind(this);
        this.updateThemeTitle = this.updateThemeTitle.bind(this);
        this.updateThemeItem = this.updateThemeItem.bind(this);
        // this.handleClickAdd = this.handleClickAdd.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this); 
        // this.handleDBSubmit = this.handleDBSubmit.bind(this);  
    }

    // componentDidMount() {
    //     if(this.props.match.params.themeId) {
    //         console.log(">>>>>>> Theme Id", this.props.match.params.themeId);
    //         console.log(">>>>>>> Props", this.props);
    //         this.props.getThemeById(this.props.match.params.themeId);
    //     }
    // }

    updateThemeTitle(){
        return e => this.setState({
            name: e.currentTarget.value
        });
    }

    updateThemeBody(){
        return e => this.setState({
            description: e.currentTarget.value
        });
    }

    updateThemeItem(){
        return e => this.setState({
            items: e.currentTarget.value
        });
    }

    // handleClickAdd(){
    //     this.setState( state => {
    //             let formThemeItems =  [...state.formThemeItems, state.formThemeItem];
    //             return  {
    //                 formThemeItems
    //             };
    //         }
    //     );

    // }

    handleSubmit(e) {
        e.preventDefault();

        // let makeTheme = {
        //     name: this.state.formThemeTitle,
        //     description: this.state.formThemeBody            
        // };

        // if (this.state.formThemeItem) {
        //     makeTheme.items = this.state.formThemeItem;
        // }
        
        this.props.postTheme(this.state);
        this.props.history.push('/allThemes');
      }

    // handleDBSubmit(e) {
    //     e.preventDefault();
    //     console.log('ttt', this.props);
        
    //     this.props.postThemeItems({ 
    //         theme_id: this.props.newTheme._id,
    //         items: this.state.formThemeItems.join(',')
    //     });
    // }

	render() {

		return <div className="theme">
				<ThemeMenuContainer />

				<h1 className="theme-title">Create Your Own Bizzam</h1>
				<div className="theme-grid">
					<form onSubmit={this.handleSubmit} className="theme-form">
						<div>
							<label className="theme-labels">
								<span>Theme title</span>
								<input type="text" value={this.state.name} onChange={this.updateThemeTitle()} className="theme-input theme-input-1" />
							</label>
						</div>

						<div>
							<label className="theme-labels">
								<span>Theme description</span>
								<input type="text" value={this.state.description} onChange={this.updateThemeBody()} className="theme-input" />
							</label>
						</div>

						<div>
							<label className="theme-labels item-label">
								<span>Bizzam Items</span>
								<br />
								<input type="text" value={this.state.items} onChange={this.updateThemeItem()} className="theme-input item-input" placeholder="Enter items separated by comma." />
							</label>
						</div>

						<input type="submit" value="Save Bizzam" className="theme-btn" />
					</form>
				</div>
			</div>;
    }
}

export default withRouter(Theme);