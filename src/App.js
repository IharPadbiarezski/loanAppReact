import React, { Component, Fragment } from 'react';
import './normalize.css';
import './skeleton.css';
import Form from './components/Form';

function App() {
	return (
		<Fragment>
			<h1>Loan Calculator</h1>

			<Form />
		</Fragment>
	);
}

export default App;
