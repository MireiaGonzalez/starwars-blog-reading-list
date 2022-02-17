import React, { useEffect, useContext, useState } from "react";
import "./home.css";
import { Context } from "../../store/appContext.js";

//Images
import starwarsImage from "../../../img/starwars.jpg"
import starwarsPlanets from "../../../img/starwars-planets.jpg"
import starwarsVehicles from "../../../img/starwars-vehicles.jpg"

//Service
import {
  getAllPeople,
  getAllPlanets,
  getAllVehicles,
} from "../../service/starwars.js";

//Component
import Card from "../../component/Card/Card.jsx";
import SeeMoreCard from "../../component/SeeMoreCard/SeeMoreCard.jsx";
import Spinner from "../../component/Spinner/Spinner.jsx";

const Home = () => {
  const { store, actions } = useContext(Context);

  const [loading, setLoading] = useState(false);

  const getEverything = async () => {
    try {
      setLoading(true);
      const peopleRes = await getAllPeople();
      const peopleJson = await peopleRes.json();
      console.log(peopleJson);
      actions.setStarwarsPeople(peopleJson.results);
      const planetsRes = await getAllPlanets();
      const planetsJson = await planetsRes.json();
      console.log(planetsJson);
      actions.setStarwarsPlanets(planetsJson.results);
      const vehiclesRes = await getAllVehicles();
      const vehiclesJson = await vehiclesRes.json();
      console.log(vehiclesJson);
      actions.setStarwarsVehicles(vehiclesJson.results);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getEverything();
  }, []);

  console.log(store.starwarsVehicles)
  return (
    <div className="container-fluid wrapper">
      <div className="content">
        {loading ? (
          <>
            <Spinner />
            <div className="d-flex justify-content-center mt-3">
              <h1>We are loading everything... It's almost done!</h1>
            </div>
          </>
        ) : (
          <>
     
            <h1 className="home-title mt-md-5 mb-md-4 mt-sm-4 mb-sm-4 d-flex justify-content-center">CHARACTERS</h1>
     
            <div className="people-scrollmenu d-flex justify-content-center">
              <div className="scrollmenu col-md-11 col-sm-12 col-lg-11 col-xs-12 mb-4">
                {store.starwarsPeople.map((character, index) => (
                  <Card
                    key={character.uid}
                    title={character.name}
                    id={index}
                    buttonText="Details"
                    imageSrc={`https://starwars-visualguide.com/assets/img/characters/${store.starwarsPeople[index].uid}.jpg`}
                  />
                ))}
                <SeeMoreCard buttonText="Go to Characters" title="SEE ALL CHARACTERS" imageSrc={starwarsImage} />
              </div>
            </div>
            <h1 className="home-title mt-md-5 mb-md-4 mt-sm-4 mb-sm-4 d-flex justify-content-center">PLANETS</h1>
            <div className="planets-scrollmenu d-flex justify-content-center">
              <div className="scrollmenu col-md-11 col-sm-12 mb-4">
                {store.starwarsPlanets.map((planet, index) => {
                  if (planet.name !== "Tatooine") {
                    return (
                      <Card
                        key={planet.uid}
                        title={planet.name}
                        id={index}
                        buttonText="Details"
                        imageSrc={`https://starwars-visualguide.com/assets/img/planets/${store.starwarsPlanets[index].uid}.jpg`}
                      />
                    );
                  } else {
                    return (
                      <Card
                        key={planet.uid}
                        title={planet.name}
                        id={index}
                        buttonText="Details"
                        imageSrc={
                          "https://upload.wikimedia.org/wikipedia/en/6/6d/Tatooine_%28fictional_desert_planet%29.jpg"
                        }
                      />
                    );
                  }
                })}
                <SeeMoreCard buttonText="Go to Planets" title="SEE ALL PLANETS" imageSrc={starwarsPlanets} />
              </div>
            </div>
            <h1 className="home-title mt-md-5 mb-md-4 mt-sm-4 mb-sm-4 d-flex justify-content-center">VEHICLES</h1>
            <div className="people-scrollmenu d-flex justify-content-center">
              <div className="scrollmenu col-md-11 col-sm-12 col-lg-11 col-xs-12 mb-4">
              {store.starwarsVehicles.map((vehicle, index) => (
                  <Card
                    key={vehicle.uid}
                    title={vehicle.name}
                    id={index}
                    buttonText="Details"
                    imageSrc={`https://starwars-visualguide.com/assets/img/vehicles/${store.starwarsVehicles[index].uid}.jpg`}
                  />
              ))}
              <SeeMoreCard buttonText="Go to Vehicles" title="SEE ALL VEHICLES" imageSrc={starwarsVehicles} />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
