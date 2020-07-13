import React, { PureComponent } from 'react';
import { ResumeType } from '../types';

type Props = {
	resumeData: ResumeType;
};

export default class About extends PureComponent<Props> {
	render() {
		let resumeData = this.props.resumeData;
		return (
			<section id="about">
				<div className="row">
					<div className="three columns">
						<img className="profile-pic" src="images/profilepic.jpg" alt="" />
					</div>

					<div className="nine columns main-col">
						<h2>About Me</h2>
						<p>{resumeData.aboutme}</p>

						{/* <div className="row">
							<div className="columns contact-details">
								<h2>Contact Details</h2>
								<p className="address">
									<span>{resumeData.name}</span>
									<br />
									<span>{resumeData.address}</span>
									<br />
									<span>
										<a
											style={{
												color: 'inherit',
												textDecoration: 'underline',
											}}
											className="smoothscroll"
											href={'#contact'}
										>
											More info
										</a>
									</span>
								</p>
							</div>
						</div> */}
					</div>
				</div>
			</section>
		);
	}
}
