import React, { PureComponent } from 'react';
import { ResumeType } from '../types';

type Props = {
	resumeData: ResumeType;
};

export default class Porfolio extends PureComponent<Props> {
	render() {
		let resumeData = this.props.resumeData;
		return (
			<section id="portfolio">
				<div className="row">
					<div className="twelve columns collapsed">
						<h1>My Work</h1>
						<h1>In Progress....</h1>
						{/* <div
							id="portfolio-wrapper"
							className="bgrid-quarters s-bgrid-thirds cf"
						>
							{resumeData.portfolio &&
								resumeData.portfolio.map((item) => {
									return (
										<div className="columns portfolio-item" key={item.name}>
											<div className="item-wrap">
												<a href="#modal-01">
													<img
														src={`${item.imgurl}`}
														alt={''}
														className="item-img"
													/>
													<div className="overlay">
														<div className="portfolio-item-meta">
															<h5>{item.name}</h5>
															<p>{item.description}</p>
														</div>
													</div>
												</a>
											</div>
										</div>
									);
								})}
						</div> */}
					</div>
				</div>
			</section>
		);
	}
}
