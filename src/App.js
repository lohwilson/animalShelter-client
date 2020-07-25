import React from 'react';
import './App.css';
import ShowAnimal from './component/ShowAnimal'
import UpdateForm from './component/UpdateForm'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
	return (
		<Router>
			<div className="App">
				<Switch>
					<Route exact path='/animalShelter-client/banana' component={ShowAnimal} />
					<Route exact path='/animalShelter-client/' component={ShowAnimal} />
					<Route exact path='/animalShelter-clientz' component={ShowAnimal} />
					<Route exact path='/apple' component={ShowAnimal} />
					<Route exact path='/animalShelter-client/:index' component={UpdateForm} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
