import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NaviBar from './Components/Navibar';
import Footer from './Components/Footer';

import {
	BrowserRouter as Router,
	Switch,
	Route
} from 'react-router-dom';

import {Home} from './Home';
import {Users} from './Users';
import {About} from './About';

function App() {
	return (
		<>
			<Router>
				<NaviBar />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/users" component={Users} />
					<Route path="/about" component={About} />
				</Switch>
			</Router>
			<Footer />
		</>
	);
}

export default App;


























