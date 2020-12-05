import React from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from "react-router-dom";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Dashboard from "./components/Dashboard";
import CssBaseline from "@material-ui/core/CssBaseline";

const App = () => {
	const darkTheme = createMuiTheme({
		palette: {
			type: "dark",
		},
	});
	return (
		<ThemeProvider theme={darkTheme}>
			<CssBaseline />
			<Router>
				<Switch>
					<Route exact path="/">
						<Redirect to="/dashboard" />
					</Route>
					<Route exact path="/dashboard">
						<Dashboard />
					</Route>
				</Switch>
			</Router>
		</ThemeProvider>
	);
};

export default App;
