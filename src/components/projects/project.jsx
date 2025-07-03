import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

import "./styles/project.css";
import { faGit } from "@fortawesome/free-brands-svg-icons/faGit";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Project = (props) => {
	const {
		logo,
		title,
		description,
		linkTextWebsite,
		linkWebsite,
		linkTextCode,
		linkCode,
	} = props;

	return (
		<React.Fragment>
			<div className="project">
				<div className="project-container">
					<div className="project-logo">
						<img src={logo} alt="logo" />
					</div>
					<div className="project-title">{title}</div>
					<div className="project-description">{description}</div>
					<div className="project-links-row">
						<Link
							to={linkWebsite}
							target="_blank"
							rel="noopener noreferrer"
						>
							<div className="project-link">
								<div className="project-link-icon">
									<FontAwesomeIcon icon={faGlobe} />
								</div>
								<div className="project-link-text">
									{linkTextWebsite}
								</div>
							</div>
						</Link>
						<Link
							to={linkCode}
							target="_blank"
							rel="noopener noreferrer"
						>
							<div className="project-link">
								<div className="project-link-icon">
									<FontAwesomeIcon icon={faGithub} />
								</div>
								<div className="project-link-text">
									{linkTextCode}
								</div>
							</div>
						</Link>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Project;
