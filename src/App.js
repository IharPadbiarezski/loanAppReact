import React, { Fragment } from 'react';
import './normalize.css';
import './skeleton.css';
import Form from './components/Form';

function App() {
	return (
		<Fragment>
			<h1>Loan Calculator</h1>

			<div className="container">
				<Form />
			</div>
		</Fragment>
	);
}

export default App;
