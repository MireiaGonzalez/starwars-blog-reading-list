import React, { useEffect, useState, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { Context } from "../../store/appContext.js";
import "./details.css";

//Service
import { getInfo } from "../../service/starwars";

//Components
import Spinner from "../../component/Spinner/Spinner.jsx";

//URL
const vehiclesURL = "https://www.swapi.tech/api/vehicles";

const VehiclesDetails = () => {
    const { store, actions } = useContext(Context);
  const { id } = useParams();
  const [loading, setLoading] = useState(false);

  const getVehiclesDetails = async (url) => {
    try {
      setLoading(true);
      const vehicleInfoRes = await getInfo(url, id);
      const vehicleInfoJson = await vehicleInfoRes.json();
      actions.setStarwarsVehiclesDetails(vehicleInfoJson.result.properties);
    } catch (err) {
      console.log(err);
    } finally {
        setLoading(false)
    }
  };

  useEffect(() => {
    getVehiclesDetails(vehiclesURL);
  }, [])

  console.log(store.vehiclesInfo)
  return (
    <>
    {loading ? (
      <Spinner />
    ) : (
      <>
        <div className="d-flex justify-content-center">
          <h1 className="title-name">{store.vehiclesInfo.name}</h1>
        </div>
        <div className="d-flex justify-content-center align-items-center mt-5 details-container">
          <div className="details-image">
            <img
              src={`https://starwars-visualguide.com/assets/img/vehicles/${id}.jpg`}
              alt={`There isn't an image of ${store.vehiclesInfo.name}`}
            />
          </div>
          <div className="separation-details"></div>
          <div>
            <div className="details-box">
              <p>{`Cargo_capacity: ${store.vehiclesInfo.cargo_capacity}`}</p>
              <p>{`Consumables: ${store.vehiclesInfo.consumables}`}</p>
              <p>{`Cost_in_credits: ${store.vehiclesInfo.cost_in_credits}`}</p>
              <p>{`Crew: ${store.vehiclesInfo.crew}`}</p>
              <p>{`Manufacturer: ${store.vehiclesInfo.manufacturer}`}</p>
              <p>{`Max_atmosphering_speed: ${store.vehiclesInfo.max_atmosphering_speed}`}</p>
              <p>{`Model: ${store.vehiclesInfo.model}`}</p>
              <p>{`Passengers: ${store.vehiclesInfo.passengers}`}</p>
              <p>{`Vehicle_class: ${store.vehiclesInfo.vehicle_class}`}</p>
            </div>
          </div>
        </div>
      </>
    )}
  </>
  )
}

export default VehiclesDetails;