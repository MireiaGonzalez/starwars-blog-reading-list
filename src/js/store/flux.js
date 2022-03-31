const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			starwarsPeople: [],
			peopleNextPage: "",
			peoplePreviousPage: "",
			characterInfo: [],
			starwarsPlanets: [],
			planetsNextPage: "",
			planetsPreviousPage: "",
			planetsInfo: [],
			starwarsVehicles: [],
			vehiclesNextPage: "",
			vehiclesPreviousPage: "",
			vehiclesInfo: []

		},
		actions: {
			setStarwarsPeople: (peopleData) => {
				setStore({starwarsPeople: peopleData.results, peopleNextPage: peopleData.next, peoplePreviousPage: peopleData.previous})
			},
			
			setStarwarsPlanets: (planetsData) => {
				setStore({starwarsPlanets: planetsData.results, planetsNextPage: planetsData.next, planetsPreviousPage: planetsData.previous})
			},
			setStarwarsVehicles: (vehiclesData) => {
				setStore({starwarsVehicles: vehiclesData.results, vehiclesNextPage: vehiclesData.next, vehiclesPreviousPage: vehiclesData.previous})
			}
		}
	};
};

export default getState;
