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
			vehiclesInfo: [],
			favourites: []

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

			setFavourites: (data) => {
					setStore({favourites: getStore().favourites.concat(data)})
			},

			deleteFavourite: (id) => {
				const filteredArray = getStore().favourites.filter(x => x.uid !== id);
				setStore({favourites: filteredArray})
			}
		}
	};
};

export default getState;
