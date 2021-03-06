import React, { useEffect, useState, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { Context } from "../../store/appContext.js";
import "./details.css"

//Service
import { getInfo, getAll } from "../../service/starwars";

//Components
import Spinner from "../../component/Spinner/Spinner.jsx";

//URL
const peopleURL = "https://www.swapi.tech/api/people";

const CharactersDetails = () => {
  const { store, actions } = useContext(Context);
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [planetName, setPlanetName] = useState("");
  const [planetUid, setPlanetUid] = useState("");

  const getCharactersDetails = async (url) => {
    try {
      setLoading(true);
      const charInfoRes = await getInfo(url, id);
      const charInfoJson = await charInfoRes.json();
      actions.setStarwarsPeopleDetail(charInfoJson.result.properties);
      const planetInfo = await getAll(charInfoJson.result.properties.homeworld)
      const planetInfoJson = await planetInfo.json()
      setPlanetName(planetInfoJson.result.properties.name)
      setPlanetUid(planetInfoJson.result.uid)
    
    } catch (err) {
      console.log(err);
    } finally {
        setLoading(false)
    }
  };


  useEffect(() => {
    getCharactersDetails(peopleURL);
  }, []);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <div className="d-flex justify-content-center">
            <h1 className="title-name">{store.characterInfo.name}</h1>
          </div>
          <div className="d-flex justify-content-center align-items-center mt-5 details-container">
            <div className="details-image">
              <img
                src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
                alt=""
              />
            </div>
            <div className="separation-details"></div>
            <div>
              <div className="details-box">
                <p>{`Birth_year: ${store.characterInfo.birth_year}`}</p>
                <p>{`Eye_color: ${store.characterInfo.eye_color}`}</p>
                <p>{`Gender: ${store.characterInfo.gender}`}</p>
                <p>{`Hair_color: ${store.characterInfo.hair_color}`}</p>
                <p>{`Height: ${store.characterInfo.height}`}</p>
                <p>{`Mass: ${store.characterInfo.mass}`}</p>
                <p>{`Skin_color: ${store.characterInfo.skin_color}`}</p>
                <p>Hometown:
                    <Link to={`/details/planets/${planetUid}`} className="btn btn-primary ms-2">{planetName}</Link>
                </p>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default CharactersDetails;
