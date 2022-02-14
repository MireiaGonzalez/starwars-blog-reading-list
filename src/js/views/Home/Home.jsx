import React, { useEffect, useContext, useState } from "react";
import "./home.css";
import { Context } from "../../store/appContext.js";
//Service
import {
  getAllPeople,
  getAllPlanets,
  getAllVehicles,
} from "../../service/starwars.js";

//Component
import Card from "../../component/Card/Card.jsx";
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

  return (
    <div className="container-fluid wrapper">
      <div className="content">
        {loading ? (
          <>
            <Spinner />
            <div className="d-flex justify-content-center mt-5">
              <h1>We are loading everything... It's almost done!</h1>
            </div>
          </>
        ) : (
          <>
            <h1 className="home-title mb-md-5 mb-sm-4">CHARACTERS</h1>
            <div className="people-scrollmenu d-flex justify-content-center">
              <div className="scrollmenu col-md-11 col-sm-12 col-lg-11 col-xs-12">
                {store.starwarsPeople.map((character, index) => (
                  <Card
                    key={character.uid}
                    title={character.name}
                    id={index}
                    imageSrc={`https://starwars-visualguide.com/assets/img/characters/${store.starwarsPeople[index].uid}.jpg`}
                  />
                ))}
              </div>
            </div>
            <h1 className="home-title mb-md-5 mb-sm-4 mt-5">PLANETS</h1>
            <div className="planets-scrollmenu d-flex justify-content-center">
              <div className="scrollmenu col-md-11 col-sm-12">
                {store.starwarsPlanets.map((planet, index) => {
                  if (planet.name !== "Tatooine") {
                    return (
                      <Card
                        key={planet.uid}
                        title={planet.name}
                        id={index}
                        imageSrc={`https://starwars-visualguide.com/assets/img/planets/${store.starwarsPlanets[index].uid}.jpg`}
                      />
                    );
                  } else {
                    return (
                      <Card
                        key={planet.uid}
                        title={planet.name}
                        id={index}
                        imageSrc={
                          "https://upload.wikimedia.org/wikipedia/en/6/6d/Tatooine_%28fictional_desert_planet%29.jpg"
                        }
                      />
                    );
                  }
                })}
              </div>
            </div>
            <div className="vehicles-scrollmenu d-flex justify-content-center">
              <div className="scrollmenu col-md-11 col-sm-12 col-lg-11 col-xs-12">
                
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
