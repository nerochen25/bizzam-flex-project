import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
  }

  logoutUser(e) {
      e.preventDefault();
      this.props.logout();
  }

  // Selectively render links dependent on whether the user is logged in
  getLinks() {
      if (this.props.loggedIn) {
        return (
            <div className='loggedIn-navbar'>
                <Link to={'/bizzams'}>All BizZams</Link>
                <Link to={'/profile'}>Profile</Link>
                <Link to={'/new_bizzam'}>Write a BizZam</Link>
                <Link to={'/board'}>Board</Link>
                <button onClick={this.logoutUser}>Logout</button>
            </div>
        );
      } else {
        return (
            <div className="navbar">
				<Link to={'/signup'} className="links1">
					Signup
				</Link>
				<br />
				<Link to={'/login'} className="links1">
					Login
				</Link>
            </div>
        );
      }
  }

  render() {
      return <div>
                <Link to='/' className="main-page-link">
                    <h1 className="project-title bounce-top">
                        <span className="blue">Biz</span>Z<span className="orange">am</span>
                    </h1>
                </Link>
                {this.getLinks()}
                
			</div>;
  }
}

export default NavBar;