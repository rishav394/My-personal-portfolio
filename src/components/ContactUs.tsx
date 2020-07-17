import React, { PureComponent } from 'react';
import { ResumeType } from '../types';

type Props = {
	resumeData: ResumeType;
};

export default class ContactUs extends PureComponent<Props> {
	render() {
		return (
			<section id="contact">
				<div className="row section-head">
					<div className="ten columns">
						<p className="lead">
							Feel free to contact me (Section under development)
						</p>
					</div>
				</div>
				<div className="row" style={{ marginTop: -19 }}>
					<aside className="eigth columns footer-widgets">
						<div className="widget">
							<h4>
								LinkedIn :{' '}
								<a
									rel="noopener noreferrer"
									target="_blank"
									href="https://www.linkedin.com/in/rishav-rungta/"
								>
									rishav-rungta
								</a>
							</h4>
							<h4>
								Email :{' '}
								<a href="mailto:rishav394+priority@gmail.com">
									Work related email
								</a>
							</h4>
							<h4>
								Email : <a href="mailto:rishav394@gmail.com">Heist email</a>
							</h4>
							<h4>
								Steam :{' '}
								<a
									rel="noopener noreferrer"
									target="_blank"
									href="https://steamcommunity.com/id/rishav_rungta/"
								>
									God level gamer
								</a>
							</h4>
						</div>
					</aside>
				</div>
			</section>
		);
	}
}
