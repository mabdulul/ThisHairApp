import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from "./components/LayOut/Navbar";
import Dashboard from "./components/Cust_DashBoard/dashboard";

function App() {
	return (
		<Router>
			<div className="App">
				<Navbar />
			</div>
			<div>
				<Dashboard />
			</div>
		</Router>
	);
}

export default App;
