import React from "react";
import { faUniversity } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

import INFO from "../../data/user";

const Education = () => {
	return (
		<div className="works">
			<Card
				icon={faUniversity}
				title="Education"
				body={
					<div className="works-body">
						{INFO.education.map((item) => (
							<div className="work-container">
								<div className="work-row">
									<img
										src={item.logo}
										alt="company logo"
										className="work-image"
									/>
									<div className="work-column">
										<div className="work-title">
											{item.title}
										</div>
										<div className="work-subtitle">
											{item.subtitle}
										</div>
										<div className="work-duration">
											{item.dateString}
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				}
			/>
		</div>
	);
};

export default Education;
