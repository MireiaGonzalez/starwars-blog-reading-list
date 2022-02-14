const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			starwarsPeople: [],
			peopleNextPage: "",
			characterInfo: [],
			starwarsPlanets: [],
			planetsNextPage: "",
			planetsInfo: [],
			starwarsVehicles: [],
			vehiclesNextPage: "",
			vehiclesInfo: []

		},
		actions: {
			setStarwarsPeople: (peopleData) => {
				const allCharacters = [...getStore().starwarsPeople];
				setStore({starwarsPeople: allCharacters.concat(peopleData), peopleNextPage: peopleData.next})
			},
			setStarwarsPlanets: (planetsData) => {
				const allPlanets = [...getStore().starwarsPlanets];
				setStore({starwarsPlanets: allPlanets.concat(planetsData), planetsNextPage: planetsData.next})
			},
			setStarwarsVehicles: (vehiclesData) => {
				const allVehicles = [...getStore().starwarsVehicles];
				setStore({starwarsVehicles: allVehicles.concat(vehiclesData), vehiclesNextPage: vehiclesData.next})
			}
		}
	};
};

export default getState;
