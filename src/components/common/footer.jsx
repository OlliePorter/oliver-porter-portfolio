import React from "react";
import { Link } from "react-router-dom";
import INFO from "../../data/user";

import "./styles/footer.css";

const Footer = () => {
	return (
		<React.Fragment>
			<div className="footer">
				<div className="footer-links">
					<ul className="footer-nav-link-list">
						<li className="footer-nav-link-item">
							<Link to="/">Home</Link>
						</li>
						{/* TODO: Add back about when needed */}
						{/* <li className="footer-nav-link-item">
							<Link to="/about">About</Link>
						</li> */}
						<li className="footer-nav-link-item">
							<Link to="/projects">Projects</Link>
						</li>
						{/* TODO: Add back articles when needed */}
						{/* <li className="footer-nav-link-item">
							<Link to="/articles">Articles</Link>
						</li> */}
						<li className="footer-nav-link-item">
							<Link
								to={`mailto:${INFO.main.email}`}
								target="_blank"
								rel="noopener noreferrer"
							>
								Contact
							</Link>
						</li>
					</ul>
				</div>

				<div className="footer-credits">
					<div className="footer-credits-text">
						© 2025 Oliver Porter. All Rights Reserved.
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Footer;
