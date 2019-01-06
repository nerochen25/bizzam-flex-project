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

        // this.logoutUser = this.logoutUser.bind(this);
        
        this.updateThemeBody = this.updateThemeBody.bind(this);
        this.updateThemeTitle = this.updateThemeTitle.bind(this);
        this.updateThemeItem = this.updateThemeItem.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleClickAdd = this.handleClickAdd.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        
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
            this.setState({
                formThemeItems: [...this.state.formThemeItems, this.state.formThemeItem]
            });      
            console.log("form theme items is :", this.state.formThemeItems);
    }

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
        console.log("END OF HANDLESUBMIT");
        console.log("makeTheme is :", makeTheme);
      }

    handleDBSubmit(e) {
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
      }

    // postThemeItems(){
    //     for(let i=0; i < this.state.formThemeItems.length - 1; i++){
    //         return <div>formThemeItems[i]</div>
    //     }
    // }
    

	render() {
		return (<div>
                    <div className="theme">
                        <h1 className="theme-title">Create Your Bizzam</h1>

                        { this.state.themeCreated ? 
                            ( 
                            // generates a list of current theme items
                            // has a textbox for adding to current theme items
                            // has a second form for attempted saving to the DB 
                            <div className="theme-container">
                                {/* {this.postThemeItems()} */}
                                <form onSubmit={this.handleClickAdd} className="theme-form">
                                    <div className="theme-item" />
                                      <label className="theme-labels">
								         Your Bizzam item goes here (i.e. "high-five a kitten")
								         <input type="text" onChange={this.updateThemeItem()} className="theme-input-items" />
							         </label>
                                     <input type="submit" value="Create this item" className="theme-btn" />
                                </form>
                            
                            
                                <form onSubmit={this.handleDBSubmit} className="theme-form">
                                    <div className="theme-item" />
                                      <label className="theme-labels">
								         Click here to Save
								         <input type="text" onChange={this.updateThemeItem()} className="theme-input-items" />
							         </label>
                                     <input type="submit" value="Save this Bizzam" className="theme-btn" />
                                </form>


                            </div>  
                               
                                ) :
                                // this form generates a theme object
                                <form onSubmit={this.handleSubmit} className="theme-form">
                                    <label>
                                        <span className="theme-labels">Enter a Theme title</span>
                                        <input type="text" onChange={this.updateThemeTitle()} className="theme-input" />
							        </label>
                                    <label>
                                        <span className="theme-labels">Enter a Theme description</span>
                                        <input type="text" onChange={this.updateThemeBody()} className="theme-input" />
							        </label>
                                    <input type="submit" value="Create your Theme" className="theme-btn" />
                                </form>
                                

                        }
                    </div>
				
            </div>
        );
    }
}

export default withRouter(Theme);