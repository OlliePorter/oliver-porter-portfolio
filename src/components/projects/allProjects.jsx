import React from "react";

import Project from "./project";

import INFO from "../../data/user";

import "./styles/allProjects.css";

const AllProjects = () => {
	return (
		<div className="all-projects-container">
			{INFO.projects.map((project, index) => (
				<div className="all-projects-project" key={index}>
					<Project
						logo={project.logo}
						title={project.title}
						role={project.role}
						description={project.description}
						linkTextWebsite={project.linkTextWebsite}
						linkWebsite={project.linkWebsite}
						linkTextCode={project.linkTextCode}
						linkCode={project.linkCode}
					/>
				</div>
			))}
		</div>
	);
};

export default AllProjects;
