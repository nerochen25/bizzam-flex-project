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
						BizZam is an online platform for playing user created bingo boards! 
						Make your own Bizzam board modes such as 'scavenger hunt' Bazzam , 'travel' Bazzam, or even 'team-building Bazzam!
					</p>
				</section>

				<section className="what-bizzam">
					<h3>Playing Bazzam is easy as one, two, three!</h3>
					<p>Step 1: Make your theme.</p>
					<p>Step 2: Make your list of Todos. </p>
					<p>Step 3: Invite your friends.</p>
					<p>The first player to complete a row wins!</p>
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
					  <p className="footer-msg">	Thank you so much for playing BizZam! </p>
					  <p className="footer-msg">	For a behind the scenes look at Bizzam check out our Github link below. </p>

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
							<a href="https://www.linkedin.com/in/trevor-shepard-3a9b92a2/" target="_blank" rel="noopener noreferrer">Trevor Shepard</a>
						
						</div>
					</div>
				</footer>
		</div>;
  }
}

export default MainPage;

