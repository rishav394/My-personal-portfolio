import React, { PureComponent } from 'react';
import { ResumeType } from '../types';

type Props = {
	resumeData: ResumeType;
};

type State = {
	expandedSkills: boolean;
};

export default class Resume extends PureComponent<Props, State> {
	skillRef: HTMLDivElement | null;

	constructor(props: Props) {
		super(props);
		this.state = {
			expandedSkills: false,
		};
		this.performSkillAction = this.performSkillAction.bind(this);
		this.skillRef = null;
	}

	performSkillAction() {
		this.setState(
			{
				expandedSkills: !this.state.expandedSkills,
			},
			() => {
				if (!this.state.expandedSkills) {
					(this.skillRef as HTMLDivElement).scrollIntoView();
					console.log('scrolling');
				}
			},
		);
	}

	getRotation() {
		return this.state.expandedSkills ? 270 : 90;
	}

	render() {
		let resumeData = this.props.resumeData;
		return (
			<section id="resume">
				<div className="row education">
					<div className="three columns header-col">
						<h1>
							<span>Education</span>
						</h1>
					</div>

					<div className="nine columns main-col">
						{resumeData.education &&
							resumeData.education.map((item) => {
								return (
									<div className="row item">
										<div className="twelve columns">
											<h3>{item.UniversityName}</h3>
											<p className="info">
												{item.specialization}
												<span>&bull;</span>{' '}
												<em className="date">
													{item.MonthOfPassing} {item.YearOfPassing}
												</em>
											</p>
											<p>{item.Achievements}</p>
										</div>
									</div>
								);
							})}
					</div>
				</div>
				<div className="row work">
					<div className="three columns header-col">
						<h1>
							<span>Work</span>
						</h1>
					</div>

					<div className="nine columns main-col">
						{resumeData.work &&
							resumeData.work.map((item) => {
								return (
									<div className="row item">
										<div className="twelve columns">
											<h3>{item.CompanyName}</h3>
											<p className="info">
												{item.specialization}
												<span>&bull;</span>{' '}
												<em className="date">
													{item.MonthOfJoining} {item.YearOfJoinging}
													{' - '}
													{item.MonthOfLeaving} {item.YearOfLeaving}
												</em>
											</p>
											<p>{item.Achievements}</p>
										</div>
									</div>
								);
							})}
					</div>
				</div>

				<div
					className="row skill"
					style={{
						maxHeight: this.state.expandedSkills ? undefined : 380,
						overflow: 'hidden',
					}}
					ref={(skillDiv) => {
						this.skillRef = skillDiv;
					}}
				>
					<div className="three columns header-col">
						<h1>
							<span>Skills</span>
						</h1>
					</div>

					<div className="nine columns main-col">
						<div className="bars">
							<ul className="skills">
								{resumeData.skills &&
									resumeData.skills.map((skill) => {
										return (
											<li>
												<span
													className={`bar-expand`}
													style={{
														width: `${skill.skillScore}%`,
														// MozAnimation: 'css 2s ease',
														// WebkitAnimation: 'css 2s ease',
													}}
												/>
												<em>{skill.skillname}</em>
											</li>
										);
									})}
							</ul>
						</div>
					</div>
				</div>
				<div>
					<div className="row">
						<div className="three columns header-col"></div>
						<div
							className="nine columns main-col"
							style={{
								textAlign: 'center',
								alignItems: 'center',
								alignContent: 'center',
								alignSelf: 'center',
								marginTop: this.state.expandedSkills ? undefined : 40,
								marginRight: 20,
							}}
						>
							<img
								style={{
									height: '45px',
									width: '45px',
									transform: `rotate(${this.getRotation()}deg)`,
									marginBottom: '-10px',
									cursor: 'pointer',
									border: '2px solid',
									padding: '3px',
									borderRadius: 7,
								}}
								onClick={this.performSkillAction}
								src={process.env.PUBLIC_URL + '/images/expand.png'}
							/>
						</div>
					</div>
				</div>
			</section>
		);
	}
}
