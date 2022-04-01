import React, { useEffect, useContext, useState } from "react";
import { Context } from "../../store/appContext.js";
import "./characters.css";

//Service
import { getAllPeople } from "../../service/starwars";

//Components
import Card from "../../component/Card/Card.jsx";
import Spinner from "../../component/Spinner/Spinner.jsx";

//URL
const URL = "https://www.swapi.tech/api";

const Characters = () => {
  const { store, actions } = useContext(Context);
  const [loading, setLoading] = useState(false);

  const getAllCharacters = async () => {
    try {
      setLoading(true);
      const charactersRes = await getAllPeople(URL);
      const charactersJson = await charactersRes.json();
      actions.setStarwarsPeople(charactersJson);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllCharacters();
  }, []);

  const handlePageCharacters = async (url) => {
    try {
      setLoading(true);
      const nextChar = await getAllPeople(url);
      const nextCharJson = await nextChar.json();
      actions.setStarwarsPeople(nextCharJson);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div>
        <div className="container-fluid col-12" id="characters-container">
          {loading ? (
            <Spinner />
          ) : (
            <>
              <h1 className="text-center mb-4" id="title-characters">
                CHARACTERS
              </h1>
              {store.starwarsPeople.map((char, index) => (
                <Card
                  cardType="col-md-2 col-sm-12"
                  key={char.uid}
                  title={char.name}
                  id={index}
                  buttonText="Details"
                  imageSrc={`https://starwars-visualguide.com/assets/img/characters/${store.starwarsPeople[index].uid}.jpg`}
                />
              ))}
              <div className="d-flex justify-content-center mt-5">
                {store.peoplePreviousPage === null ? (
                  <button type="button" className="btn btn-primary disabled">
                    {"<<"}
                  </button>
                ) : (
                  <button type="button" className="btn btn-primary">
                    {"<<"}
                  </button>
                )}
                <div id="div-separation"></div>
                {store.peopleNextPage === null ? (
                  <button type="button" className="btn btn-primary disabled">
                    {">>"}
                  </button>
                ) : (
                  <button type="button" className="btn btn-primary">
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

export default Characters;
