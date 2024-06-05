const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			personDetails: {
				description: "",
				properties: {}
			},
			vehicles: [],
			vehiclesDetails: {
                 description: "",
				 properties: {},
			},
			planets: [],
			planetsDetails: {
				description: "",
				properties: {}
			},
			favorites: []
		},
		actions: {
			getPeople: async () => {
				const response = await fetch('https://www.swapi.tech/api/people/');
				if(!response.ok) {
					throw new Error(response.status, response.statusText);
				}
				const data = await response.json();
				setStore({people: data.results});
			},
        
			getPersonDetails: async (id) => {
				const response = await fetch(`https://www.swapi.tech/api/people/${id}`);
				if(!response.ok) {
					throw new Error(response.status,  response.statusText);
				}
				const data = await response.json();

				const personDetails = {
					description:  data.result.description,
					properties: {...data.result.properties}
				}
				setStore({personDetails: personDetails});
			},
  

			getPeopleDetails: () => {},
			getVehicles: async () => {
				const response = await fetch('https://www.swapi.tech/api/vehicles/');
				if(!response.ok) {
					throw new Error(response.status, response.statusText);
				}
				const data = await response.json();
				setStore({vehicles: data.results});
			},
			getVehiclesDetails: async (id) => {
				const response = await fetch(`https://www.swapi.tech/api/vehicles/${id}`);
				if(!response.ok) {
					throw new Error(response.status, response.statusText);
				}
				const data = await response.json();

				const vehiclesDetails = {
					description: data.result.description,
					properties: {...data.result.properties}
				}
				setStore({vehiclesDetails: vehiclesDetails})
			},
			
			getPlanets: async () => {
				const response = await fetch('https://www.swapi.tech/api/planets/');
				if(!response.ok) {
					throw new Error(response.status, response.statusText);
				}
				const data = await response.json();
				 setStore({planets: data.results});
			},
			getPlanetsDetails: async (id) => {
				const response = await fetch(`https://www.swapi.tech/api/planets/${id}`);
				if(!response.ok) {
					throw new Error(response.status, response.statusText);
				}
				const data = await response.json();

				const planetsDetails = {
					description: data.result.description,
					properties: {...data.result.properties}
				}
				setStore({planetsDetails: planetsDetails})
			},
			
			
			
			
			
			
			addFavorite: (favoriteItem) => {
			  const store = getStore();
			  store.favorites.push(favoriteItem);
			  setStore(store)
			  console.log(store.favorites)
			},
			removeFavorite: (deleteItem) => {
				const store = getStore();
				const refreshFavorites = store.favorites.filter(i => i !== deleteItem);
				setStore({
					favorites: refreshFavorites,
				});
			}
		 

			}
		}
	};


export default getState;
