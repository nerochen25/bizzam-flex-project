import React from 'react';
import { withRouter } from 'react-router-dom';
import './theme.css';
import ThemeMenuContainer from './theme_menu_container';

class Theme extends React.Component {
	constructor(props) {
        super(props);
        
        this.state = {
            formThemeTitle: '',
            formThemeBody: '',
            formThemeItem: null,
            formThemeItems: []
        };

        this.updateThemeBody = this.updateThemeBody.bind(this);
        this.updateThemeTitle = this.updateThemeTitle.bind(this);
        this.updateThemeItem = this.updateThemeItem.bind(this);
        this.handleClickAdd = this.handleClickAdd.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this); 
        // this.handleDBSubmit = this.handleDBSubmit.bind(this);  
    }

    updateThemeTitle(){
        return e => this.setState({
            formThemeTitle: e.currentTarget.value
        });
    }

    updateThemeBody(){
        return e => this.setState({
            formThemeBody: e.currentTarget.value
        });
    }

    updateThemeItem(){
        return e => this.setState({
            formThemeItem: e.currentTarget.value
        });
    }

    handleClickAdd(){
        this.setState( state => {
                let formThemeItems =  [...state.formThemeItems, state.formThemeItem];
                return  {
                    formThemeItems
                };
            }
        );

    }

    handleSubmit(e) {
        e.preventDefault();

        let makeTheme = {
            name: this.state.formThemeTitle,
            description: this.state.formThemeBody            
        };

        if (this.state.formThemeItem) {
            makeTheme.items = this.state.formThemeItem;
        }
    
        this.props.postTheme(makeTheme);
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
        console.log('this.props.newTheme', this.props.newTheme);

		return (
            <div className="theme">
                    <ThemeMenuContainer />

                    <h1 className="theme-title">Create Your Own Bizzam</h1>
                    <div className="theme-grid">
                        <form onSubmit={this.handleSubmit} className="theme-form">
                            <div>
                                <label className="theme-labels">
                                    <span>Enter a Theme title</span>
                                    <input type="text" onChange={this.updateThemeTitle()} className="theme-input theme-input-1" />
                                </label>
                            </div>

                            <div>
                                <label className="theme-labels">
                                    <span>Enter a Theme description</span>
                                    <input type="text" onChange={this.updateThemeBody()} className="theme-input" />
                                </label>
                            </div>

                            <div>
                                <label className="theme-labels item-label">
                                    <span>Add Bizzam Items</span>
                                    <br />
                                    <input type="text" onChange={this.updateThemeItem()} className="theme-input item-input" placeholder="Enter items separated by comma."/>
                                </label>
                                
                            </div>

                            <input type="submit" value="Save Bizzam" className="theme-btn" />
                    </form>
                </div>
            </div>
        )
    }
}

export default withRouter(Theme);