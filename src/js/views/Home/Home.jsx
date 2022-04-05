import React, { useEffect, useContext, useState } from "react";
import "./home.css";
import { Context } from "../../store/appContext.js";

//Images
import starwarsImage from "../../../img/starwars.jpg";
import starwarsPlanets from "../../../img/starwars-planets.jpg";
import starwarsVehicles from "../../../img/starwars-vehicles.jpg";

//Service
import { getAll } from "../../service/starwars.js";

//Components
import Card from "../../component/Card/Card.jsx";
import SeeMoreCard from "../../component/SeeMoreCard/SeeMoreCard.jsx";
import Spinner from "../../component/Spinner/Spinner.jsx";

//URL
const URL = "https://www.swapi.tech/api";
const peopleUrl = URL + "/people";
const planetUrl = URL + "/planets";
const vehiclesUrl = URL + "/vehicles";

const Home = () => {
  const { store, actions } = useContext(Context);
  const [loading, setLoading] = useState(false);

  const getEverything = async () => {
    try {
      setLoading(true);
      const peopleRes = await getAll(peopleUrl);
      const peopleJson = await peopleRes.json();
      actions.setStarwarsPeople(peopleJson);
      const planetsRes = await getAll(planetUrl);
      const planetsJson = await planetsRes.json();
      actions.setStarwarsPlanets(planetsJson);
      const vehiclesRes = await getAll(vehiclesUrl);
      const vehiclesJson = await vehiclesRes.json();
      actions.setStarwarsVehicles(vehiclesJson);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getEverything();
  }, []);

  console.log(store.starwarsVehicles);
  return (
    <div className="container-fluid wrapper">
      <div className="content">
        {loading ? (
          <Spinner />
        ) : (
          <>
            <h1 className="home-title mt-md-5 mb-md-4 mt-sm-4 mb-sm-4 d-flex justify-content-center">
              CHARACTERS
            </h1>

            <div className="people-scrollmenu d-flex justify-content-center">
              <div className="scrollmenu col-md-11 col-sm-12 col-lg-11 col-xs-12 mb-4">
                {store.starwarsPeople.map((character, index) => (
                  <Card
                    cardType="card-starwars-home"
                    key={character.uid}
                    title={character.name}
                    id={index}
                    detailsId={character.uid}
                    detailsType="characters"
                    onClickFunction={() => {
                      if (store.favourites.includes(character) === true) {
                        actions.deleteFavourite(character.uid);
                      } else {
                        actions.setFavourites(character);
                        console.log(character);
                        console.log("not here");
                      }
                    }}
                    icon={() => {
                      if (store.favourites.includes(character) === true) {
                        return (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-heart"
                            viewBox="0 0 16 16"
                          >
                            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                          </svg>
                        );
                      } else {
                        return (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-heart-fill"
                            viewBox="0 0 16 16"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                            />
                          </svg>
                        );
                      }
                    }}
                    imageSrc={`https://starwars-visualguide.com/assets/img/characters/${store.starwarsPeople[index].uid}.jpg`}
                  />
                ))}
                <SeeMoreCard
                  buttonText="Go to Characters"
                  title="SEE ALL CHARACTERS"
                  imageSrc={starwarsImage}
                  link="/characters"
                />
              </div>
            </div>
            <h1 className="home-title home-title-not-first mt-md-5 mb-md-4 mt-sm-4 mb-sm-4 d-flex justify-content-center">
              PLANETS
            </h1>
            <div className="planets-scrollmenu d-flex justify-content-center">
              <div className="scrollmenu col-md-11 col-sm-12 mb-4">
                {store.starwarsPlanets.map((planet, index) => {
                  if (planet.name !== "Tatooine") {
                    return (
                      <Card
                        cardType="card-starwars-home"
                        key={planet.uid}
                        title={planet.name}
                        id={index}
                        detailsId={planet.uid}
                        detailsType="planets"
                        imageSrc={`https://starwars-visualguide.com/assets/img/planets/${store.starwarsPlanets[index].uid}.jpg`}
                      />
                    );
                  } else {
                    return (
                      <Card
                        cardType="card-starwars-home"
                        key={planet.uid}
                        title={planet.name}
                        id={index}
                        detailsId={planet.uid}
                        detailsType="planets"
                        imageSrc={
                          "https://upload.wikimedia.org/wikipedia/en/6/6d/Tatooine_%28fictional_desert_planet%29.jpg"
                        }
                      />
                    );
                  }
                })}
                <SeeMoreCard
                  buttonText="Go to Planets"
                  title="SEE ALL PLANETS"
                  imageSrc={starwarsPlanets}
                  link="/planets"
                />
              </div>
            </div>
            <h1 className="home-title home-title-not-first mt-md-5 mb-md-4 mt-sm-4 mb-sm-4 d-flex justify-content-center">
              VEHICLES
            </h1>
            <div className="people-scrollmenu d-flex justify-content-center">
              <div className="scrollmenu col-md-11 col-sm-12 col-lg-11 col-xs-12 mb-4">
                {store.starwarsVehicles.map((vehicle, index) => (
                  <Card
                    cardType="card-starwars-home"
                    key={vehicle.uid}
                    title={vehicle.name}
                    id={index}
                    detailsId={vehicle.uid}
                    detailsType="vehicles"
                    imageSrc={`https://starwars-visualguide.com/assets/img/vehicles/${store.starwarsVehicles[index].uid}.jpg`}
                  />
                ))}
                <SeeMoreCard
                  buttonText="Go to Vehicles"
                  title="SEE ALL VEHICLES"
                  imageSrc={starwarsVehicles}
                  link="/vehicles"
                />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
