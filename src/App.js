import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import { Dashboard } from "./pages/dashboard/Dashboard.page";
import { Entry } from "./pages/entry/Entry.page";

function App() {
	return (
		<div className="App">
			<Router>
				<Switch>
					<Route exact path="/">
						<Entry />
					</Route>
					<Route exact path="/dashboard">
						<Dashboard />
					</Route>
					<Route path="*">
						<h1>404 Page not found</h1>
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
