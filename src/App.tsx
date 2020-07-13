import React, { PureComponent } from 'react';
import About from './components/About';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import Header from './components/Header';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Testimonials from './components/Testimonials';
import resumeData from './resumeData';

class App extends PureComponent {
	render() {
		return (
			<div className="App">
				<Header resumeData={resumeData} />
				<About resumeData={resumeData} />
				<Resume resumeData={resumeData} />
				<Portfolio resumeData={resumeData} />
				<Testimonials resumeData={resumeData} />
				<ContactUs resumeData={resumeData} />
				<Footer resumeData={resumeData} />
			</div>
		);
	}
}

export default App;
