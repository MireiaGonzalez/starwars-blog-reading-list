const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			starwarsPeople: []
		},
		actions: {
			setStarwarsPeople: (peopleList) => {
				setStore({starwarsPeople: peopleList})
			}
			
		}
	};
};

export default getState;
