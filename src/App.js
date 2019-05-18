import React, { Component, Fragment } from 'react';
import './normalize.css';
import './skeleton.css';
import Form from './components/Form';
import { calculateTotal } from './helper';
import Result from './components/Result';
import Message from './components/Message';

class App extends Component {
	state = {
		total: '',
		amount: '',
		term: ''
	};

	loanInformation = (amount, term) => {
		const total = calculateTotal(amount, term);

		this.setState({
			amount,
			total,
			term
		});
	};

	render() {
		// destructuring the state
		const { term, amount, total } = this.state;

		// Conditionaly Render a Component

		let component;
		if (total === '') {
			component = <Message />;
		} else {
			component = <Result total={total} amount={amount} term={term} />;
		}
		return (
			<Fragment>
				<h1>Loan Calculator</h1>

				<div className="container">
					<Form loanInformation={this.loanInformation} />

					<div className="messages">{component}</div>
				</div>
			</Fragment>
		);
	}
}

export default App;
