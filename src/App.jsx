import React from 'react';
import Footer from './components/Footer';
import './Styles/App.scss';
import './Styles/General.scss';
import Header from './components/Header';
import Main from './components/Main';

function App() {
	return (
		<div className="root-container">
			<Header />
			<Main />
			<Footer />
		</div>
	);
}

export default App;
