import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import injectContext from "./store/appContext";


//Views
import Home from "./views/Home/Home.jsx";
import Characters from "./views/Characters/Characters.jsx";
import Planets from "./views/Planets/Planets.jsx"
import Vehicles from "./views/Vehicles/Vehicles.jsx"
import CharactersDetails from "./views/Details/CharactersDetails.jsx";
import PlanetsDetails from "./views/Details/PlanetsDetails.jsx";
import VehiclesDetails from "./views/Details/VehiclesDetails.jsx";

//Layout
import Layout from "./layout/Layout.jsx";

//create your first component
const AppRouter = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Layout>
						<Switch>
							<Route exact path="/">
								<Home />
							</Route>
							<Route exacte path="/characters">
								<Characters />
							</Route>
							<Route exact path="/planets">
								<Planets />
							</Route>
							<Route exact path="/vehicles">
								<Vehicles />
							</Route>
							<Route exact path="/details/characters/:id">
								<CharactersDetails />
							</Route>
							<Route exact path="/details/planets/:id">
								<PlanetsDetails />
							</Route>
							<Route exact path="/details/vehicles/:id">
								<VehiclesDetails />
							</Route>
							<Route>
								<h1>Not found!</h1>
							</Route>
						</Switch>
					</Layout>
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(AppRouter);
