import React from 'react';
import { withRouter } from 'react-router-dom';
import './theme.css';

class Theme extends React.Component {
	constructor(props) {
        super(props);
        
        this.state = {
            formThemeTitle: '',
            formThemeBody: '',
            formThemeItem: '',
            formThemeItems: [],
            themeCreated: false
        };

        this.updateThemeBody = this.updateThemeBody.bind(this);
        this.updateThemeTitle = this.updateThemeTitle.bind(this);
        this.updateThemeItem = this.updateThemeItem.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleClickAdd = this.handleClickAdd.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this); 
        this.handleDBSubmit = this.handleDBSubmit.bind(this);  
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

    handleClick(){
        if (1===0) {
            this.setState({
                themeCreated: true
            });
        } else {
            alert("Not enough theme items, at least 9 are required");
        }
    }

    handleClickAdd(){
        this.setState( state => {
                const formThemeItems =  [...state.formThemeItems, state.formThemeItem];
                return  {
                    formThemeItems
                };
            }
            // () => console.log("form theme items is :", this.state.formThemeItems)  
        );

        // this.props.postThemeItems({
            
        // });
    }

    // component(){
    //     console.log(this.state.formThemeItems);
        
        
    // }

    handleSubmit(e) {
        e.preventDefault();

        this.setState({
            themeCreated: true
        });
    
        let makeTheme = {
            name: this.state.formThemeTitle,
            description: this.state.formThemeBody
        };
    
        this.props.postTheme(makeTheme);
        // console.log("makeTheme is :", makeTheme);
      }

    handleDBSubmit(e) {
        e.preventDefault();
        // console.log("ttt", this.props.themes[0]._id);
        
        this.props.postThemeItems({ 
            theme_id: this.props.themes[0]._id,
            items: this.state.formThemeItems.join(',')
        });
    }
        // e.preventDefault();
        // if (formThemeItems.length < 9) {
        //     alert("Not enough theme items, at least 9 are required");
        // } else {
            
        // }
    
        // let makeTheme = {
        //   name: this.state.formThemeTitle,
        //   description: this.state.formThemeBody
        // };
    
        // this.props.postTheme(makeTheme);
    // }

    // postThemeItems(){
    //     for(let i=0; i < this.state.formThemeItems.length - 1; i++){
    //         return <div>formThemeItems[i]</div>
    //     }
    // }
    

	render() {
        // console.log('themes inside props ===== ', this.props.themes);
		return <div className="theme">
				<h1 className="theme-title">Create Your Own Bizzam</h1>
				<div className="theme-grid">
					<div className="theme-grid-1">
						{this.state.themeCreated ? // generates a list of current theme items
							// has a textbox for adding to current theme items
							// has a second form for attempted saving to the DB
							<div className="theme-container">
								{/* {this.postThemeItems()} */}
								<form onSubmit={this.handleClickAdd} className="theme-form">
									<div className="theme-item" />
									<label className="theme-labels item-label">
                                        <span>Add Bizzam Items</span>
										<br />
										<input type="text" onChange={this.updateThemeItem()} className="theme-input item-input" />
									</label>
									<br />
									<input type="submit" value="Add" className="theme-btn item-btn" />
									<br />
									{/* <input type="submit" value="Save this Bizzam" className="theme-btn" /> */}
								</form>
							</div> : // this form generates a theme object
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
								<input type="submit" value="Create Theme" className="theme-btn" />
							</form>}
					</div>
					<div className="theme-grid-2">
						<p>
							<span className="theme-span">Theme Title:</span>
                            <span className="theme-display move-display">{this.state.formThemeTitle}</span>
							
						</p>
						<p>
							<span className="theme-span">Theme Description:</span>
                            <span className="theme-display">
                            {this.state.formThemeBody}
                            </span>
						</p>
						<p>
							<span className="theme-span">Theme Items:</span>
                            <span className="theme-display move-display-item">
                            {this.state.formThemeItems.join(', ')}
                            </span>
						</p>
						<form onSubmit={this.handleDBSubmit} className="theme-form">
							{/* <div className="theme-item" />
                                        <label className="theme-labels">
                                            Click here to Save
                                            <br/>
                                            <input type="text" onChange={this.updateThemeItem()} className="theme-input-items" />
                                        </label>
                                        <br /> */}
							<input type="submit" value="Save Bizzam" className="theme-btn" />
						</form>
					</div>
				</div>
			</div>;
    }
}

export default withRouter(Theme);