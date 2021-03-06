import React, { useEffect, useContext, useState } from "react";
import { Context } from "../../store/appContext.js";
import "./vehicles.css";

//Service
import { getAll } from "../../service/starwars";

//Components
import Card from "../../component/Card/Card.jsx";
import Spinner from "../../component/Spinner/Spinner.jsx";
import HeartIcon from "../../component/HeartIcon/HeartIcon.jsx";

//URL
const vechiclesURL = "https://www.swapi.tech/api/vehicles";

const Vehicles = () => {
  const { store, actions } = useContext(Context);
  const [loading, setLoading] = useState(false);

  const getAllVehicles = async (url) => {
    try {
      setLoading(true);
      const vehiclesRes = await getAll(url);
      const vehiclesJson = await vehiclesRes.json();
      actions.setStarwarsVehicles(vehiclesJson);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllVehicles(vechiclesURL);
  }, []);

  return (
    <div>
      <div>
        <div className="container-fluid col-12" id="characters-container">
          {loading ? (
            <Spinner />
          ) : (
            <>
              <h1 className="text-center mb-4" id="title-vehicles">
                VEHICLES
              </h1>
              {store.starwarsVehicles.map((vehicle, index) => (
                <Card
                  cardType="col-md-2 col-sm-12"
                  key={vehicle.uid}
                  title={vehicle.name}
                  id={index}
                  detailsId={vehicle.uid}
                  detailsType="vehicles"
                  onClickFunction={() => {
                    if (store.favourites.includes(vehicle) === true) {
                      actions.deleteFavourite(vehicle.uid);
                    } else {
                      actions.setFavourites(vehicle);
                    }
                  }}
                  icon={<HeartIcon />}
                  imageSrc={`https://starwars-visualguide.com/assets/img/vehicles/${store.starwarsVehicles[index].uid}.jpg`}
                />
              ))}
              <div className="d-flex justify-content-center mt-5">
                {store.vehiclesPreviousPage === null ? (
                  <button type="button" className="btn btn-primary disabled">
                    {"<<"}
                  </button>
                ) : (
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => getAllVehicles(store.vehiclesPreviousPage)}
                  >
                    {"<<"}
                  </button>
                )}
                <div id="div-separation"></div>
                {store.vehiclesNextPage === null ? (
                  <button type="button" className="btn btn-primary disabled">
                    {">>"}
                  </button>
                ) : (
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => getAllVehicles(store.vehiclesNextPage)}
                  >
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

export default Vehicles;
