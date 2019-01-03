import React from 'react';
import './main_page.css';
import { Link } from 'react-router-dom';

class MainPage extends React.Component {

  render() {
    return <div className="main-page">
			<div className="container">
				<section className="what-bizzam">
					<h3>What is BizZam?</h3>
					<p>
						BizZam is an online platform for playing user created bingo boards! Boards can be anything
						users wants to play, such as office bizzingo, lecture bizzingo, or even scavenger hunt
						bizzingo!
					</p>
				</section>

				<section className="what-bizzam">
					<h3>How to play Bizzam</h3>
					<p>To fill...</p>
				</section>

				<section className="what-bizzam">
					<h3>Get Started</h3>
					<div className="main-page-links">
						<Link to={'/signup'} className="links1">
							Signup
						</Link>
						<span>to play Bizzam with your friends.</span>
					</div>
				</section>

        

				
			</div>
      <footer className="main-footer">
					<div>
					  <p className="footer-msg">	Thank you so much for playing BizZam. To know what is going on behind the curtains, feel free to click this button.
            </p>
						<p className="github-link">
							<a href="https://github.com/nerochen25/bizzam-flex-project" target="_blank" rel="noopener noreferrer">GitHub</a>
						</p>
					</div>

					<div className="footer-left">
						<h4>Meet the developers on LinkedIn and checkout our other projects</h4>
						<div className="footer-links">
							<a href="https://www.linkedin.com/in/craig-jewett-14064843/" target="_blank" rel="noopener noreferrer">Craig Jewett</a>
							<a href="https://www.linkedin.com/in/nerochen25/" target="_blank" rel="noopener noreferrer">Nero Chen</a>
							<a href="https://www.linkedin.com/in/saipat/" target="_blank" rel="noopener noreferrer">Sai Lakshmi Pattabiraman</a>
							Trevor Shepard (need your linkedIn profile name)
						</div>
					</div>
				</footer>
		</div>;
  }
}

export default MainPage;

