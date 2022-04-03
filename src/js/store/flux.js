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

			setStarwarsPeopleDetail: (peopleDetails) => {
				setStore({characterInfo: peopleDetails})
			},
			
			setStarwarsPlanets: (planetsData) => {
				setStore({starwarsPlanets: planetsData.results, planetsNextPage: planetsData.next, planetsPreviousPage: planetsData.previous})
			},

			setStarwarsPlanetsDetails: (planetsDetails) => {
				setStore({planetsInfo: planetsDetails})
			},

			setStarwarsVehicles: (vehiclesData) => {
				setStore({starwarsVehicles: vehiclesData.results, vehiclesNextPage: vehiclesData.next, vehiclesPreviousPage: vehiclesData.previous})
			},

			setStarwarsVehiclesDetails: (vehiclesDetails) => {
				setStore({vehiclesInfo: vehiclesDetails})
			},
		}
	};
};

export default getState;
