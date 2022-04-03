import React, { useEffect, useState, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { Context } from "../../store/appContext.js";
import "./details.css";

//Service
import { getInfo } from "../../service/starwars";

//Components
import Spinner from "../../component/Spinner/Spinner.jsx";

//URL
const planetsURL = "https://www.swapi.tech/api/planets";

const PlanetsDetails = () => {
  const { store, actions } = useContext(Context);
  const { id } = useParams();
  const [loading, setLoading] = useState(false);

  const getPlanetsDetails = async (url) => {
    try {
      setLoading(true);
      const planetInfoRes = await getInfo(url, id);
      const planetInfoJson = await planetInfoRes.json();
      actions.setStarwarsPlanetsDetails(planetInfoJson.result.properties);
    } catch (err) {
      console.log(err);
    } finally {
        setLoading(false)
    }
  };

  useEffect(() => {
    getPlanetsDetails(planetsURL);
  }, [])

  return (
    <>
    {loading ? (
      <Spinner />
    ) : (
      <>
        <div className="d-flex justify-content-center">
          <h1 className="title-name">{store.planetsInfo.name}</h1>
        </div>
        <div className="d-flex justify-content-center align-items-center mt-5 details-container">
          <div className="details-image">
            <img
              src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
              alt={`There isn't an image of ${store.planetsInfo.name}`}
            />
          </div>
          <div className="separation-details"></div>
          <div>
            <div className="details-box">
              <p>{`Climate: ${store.planetsInfo.climate}`}</p>
              <p>{`Diameter: ${store.planetsInfo.diameter}`}</p>
              <p>{`Gravity: ${store.planetsInfo.gravity}`}</p>
              <p>{`Orbital_period: ${store.planetsInfo.orbital_period}`}</p>
              <p>{`Population: ${store.planetsInfo.population}`}</p>
              <p>{`Rotation_period: ${store.planetsInfo.rotation_period}`}</p>
              <p>{`Surface_water: ${store.planetsInfo.surface_water}`}</p>
              <p>{`Terrain: ${store.planetsInfo.terrain}`}</p>
            </div>
          </div>
        </div>
      </>
    )}
  </>
  )
};

export default PlanetsDetails;
