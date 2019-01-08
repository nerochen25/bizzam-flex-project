import React from 'react';
import { withRouter } from 'react-router-dom';
import './theme.css';
import ThemeMenuContainer from './theme_menu_container';

class Theme extends React.Component {
	constructor(props) {
		super(props);

		const { name, description } = this.props.theme;
        this.state = { name, description, item: '', allItems: this.props.theme.themeItems.map(i => i.text)};


        

		if (this.props.theme._id) {
			this.state.id = this.props.theme._id;
		}

		if (this.props.theme.themeItems) {
			this.state.items = this.props.theme.themeItems.map(i => i.text).join(', ');
        }
        

		this.updateName = this.updateName.bind(this);
		this.updateDescription = this.updateDescription.bind(this);
        this.updateItems = this.updateItems.bind(this);
        this.updateItem = this.updateItem.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.itemListShow = this.itemListShow.bind(this);
	}

	updateName() {
		return e =>
			this.setState({
				name: e.currentTarget.value,
			});
	}

	updateDescription() {
		return e =>
			this.setState({
				description: e.currentTarget.value,
			});
	}

	updateItems() {
		return e =>
			this.setState({
                items: e.currentTarget.value,
            });
	}

	handleSubmit(e) {
		e.preventDefault();

        this.props.postTheme({ id: this.props.theme._id, name: this.state.name, description: this.state.description, items: this.state.allItems.join(',')});
		this.props.history.push('/allThemes');
	}

	itemListShow(e) {
        e.preventDefault();
        let listItems = this.state.item;

        this.setState({
            allItems: [...this.state.allItems, listItems],
            item:""
        });
    }

    updateItem() {
        return e =>
            this.setState({
                item: e.currentTarget.value,
            });
    }

	render() {
        // console.log('theme items -------> ', this.state.allItems);

        let displayItems = this.state.allItems.map( item => (
            <li className="displayList">{item}</li>
        ));

		return <div className="theme">
				<ThemeMenuContainer />

				<h1 className="theme-title">{this.props.formType} Bizzam</h1>

				<div className="theme-grid">
					<div className="theme-grid-1">
						<form onSubmit={this.handleSubmit} className="theme-form">
							<div>
								<label className="theme-labels">
									<span className="theme-input-title">Theme title</span>
									<input type="text" value={this.state.name} onChange={this.updateName()} className="theme-input theme-input-1" />
								</label>
							</div>

							<div className="second-label ">
								<label className="theme-labels">
									<span>Theme description</span>
									<input type="text" value={this.state.description} onChange={this.updateDescription()} className="theme-input" />
								</label>
							</div>

							<div>
								<label className="theme-labels item-label">
									<span className="theme-input-bizzam-items">Bizzam Item</span>

									<input type="text" className="theme-input add-item" placeholder="Enter an item" onChange={this.updateItem()} value={this.state.item}/>

									<button onClick={this.itemListShow} className="theme-btn item-btn add-btn">
										Add Item
									</button>
									{/* <input
                                        type = "text"
                                        value = { this.state.items }
                                        onChange = { this.updateItems() }
                                        className = "theme-input item-input"
                                        placeholder = "Enter bizzam items"
                                    /> */}
								</label>
							</div>
							{/* <p>{this.state.items}</p> */}
							<input type="submit" value="Save Bizzam" className="theme-btn" />
						</form>
					</div>

					<div className="theme-grid-2">
						<h3 className="displayLine">Bizzam Items</h3>
                        <ul className="displayItems">{displayItems}</ul>
					</div>
				</div>
			</div>;
	}
}

export default withRouter(Theme);

//value={this.state.items}
//<input
// type = "text"
// value = { this.state.item }
// onChange = { this.updateItems() }
// className = "theme-input item-input"
// placeholder = "Enter an item"
//     />