import React, { useEffect, useContext, useState } from "react";
import { Context } from "../../store/appContext.js";
import "./planets.css";

//Service
import { getAll } from "../../service/starwars";

//Components
import Card from "../../component/Card/Card.jsx";
import Spinner from "../../component/Spinner/Spinner.jsx";

//URL
const planetsURL = "https://www.swapi.tech/api/planets";

const Planets = () => {
  const { store, actions } = useContext(Context);
  const [loading, setLoading] = useState(false);

  const getAllPlanets = async (url) => {
    try {
      setLoading(true);
      const planetsRes = await getAll(url);
      const planetsJson = await planetsRes.json();
      actions.setStarwarsPlanets(planetsJson);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllPlanets(planetsURL);
  }, []);

  console.log(store.starwarsPlanets)

  return (
    <div>
      <div>
        <div className="container-fluid col-12" id="characters-container">
          {loading ? (
            <Spinner />
          ) : (
            <>
              <h1 className="text-center mb-4" id="title-planets">
                PLANETS
              </h1>
              {store.starwarsPlanets.map((planet, index) => (
                <Card
                  cardType="col-md-2 col-sm-12"
                  key={planet.uid}
                  title={planet.name}
                  id={index}
                  buttonText="Details"
                  imageSrc={`https://starwars-visualguide.com/assets/img/planets/${store.starwarsPlanets[index].uid}.jpg`}
                />
              ))}
              <div className="d-flex justify-content-center mt-5">
                {store.planetsPreviousPage === null ? (
                  <button type="button" className="btn btn-primary disabled">
                    {"<<"}
                  </button>
                ) : (
                  <button type="button" className="btn btn-primary" onClick={() => getAllPlanets(store.planetsPreviousPage)}>
                    {"<<"}
                  </button>
                )}
                <div id="div-separation"></div>
                {store.planetsNextPage === null ? (
                  <button type="button" className="btn btn-primary disabled">
                    {">>"}
                  </button>
                ) : (
                  <button type="button" className="btn btn-primary" onClick={() => getAllPlanets(store.planetsNextPage)}>
                    {">>"}
                  </button>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Planets;
