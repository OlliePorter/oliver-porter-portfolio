import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

import INFO from "../../data/user";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work History"
				body={
					<div className="works-body">
						{INFO.workExperience.map((workExperience) => {
							return (
								<div className="work-container">
									<div className="work-row">
										<img
											src={workExperience.logo}
											alt="company logo"
											className="work-image"
										/>
										<div className="work-column">
											<div className="work-title">
												{workExperience.title}
											</div>
											<div className="work-subtitle">
												{workExperience.subtitle}
											</div>
											<div className="work-duration">
												{workExperience.dateString}
											</div>
										</div>
									</div>
									<div>
										<ul>
											{workExperience.responsibilities.map(
												(item) => (
													<li>{item}</li>
												)
											)}
											{/* <li>
												Led the design and
												implementation of a mobile
												augmented reality education game
												utilizing Flutter and Firebase,
												which won the Top Builder 2025
												competition and $15,000 in prize
												money.
											</li>
											<li>
												Spearheaded UI/UX design
												processes in Figma, resulting in
												30+ high-fidelity prototype
												screens.
											</li>
											<li>
												Deployed mobile app across Apple
												App Store and Google Play
												platforms, driving an average
												monthly user growth of 60% by
												enhancing usability and gamified
												engagement features.
											</li> */}
										</ul>
									</div>
								</div>
							);
						})}
					</div>
				}
			/>
		</div>
	);
};

export default Works;
