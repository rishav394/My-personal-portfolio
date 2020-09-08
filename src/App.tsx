import React, { PureComponent } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './components/About';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import Header from './components/Header';
import Portfolio from './components/Portfolio';
import { Redirector } from './components/Redirecter';
import Resume from './components/Resume';
import Testimonials from './components/Testimonials';
import resumeData from './resumeData';

class App extends PureComponent {
	render() {
		return (
			<Router>
				<Switch>
					<Route path="/resume">
						<Redirector to="https://drive.google.com/file/d/1Sfzc7a4P8A9VWx_DHDP1YS_Pdu1aihou/view?usp=sharing" />
					</Route>

					<Route path="/singleresume">
						<Redirector to="https://drive.google.com/file/d/1RLgv5X7k7FBuJzeWDOQOGUT0sqs7p6M4/view?usp=sharing" />
					</Route>

					<Route path="/">
						<div className="App">
							<Header resumeData={resumeData} />
							<About resumeData={resumeData} />
							<Resume resumeData={resumeData} />
							<Portfolio resumeData={resumeData} />
							<Testimonials resumeData={resumeData} />
							<ContactUs resumeData={resumeData} />
							<Footer resumeData={resumeData} />
						</div>
					</Route>
				</Switch>
			</Router>
		);
	}
}

export default App;
