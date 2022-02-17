import React, { useContext } from "react";
import PropTypes from "prop-types";
import "./card.css";
import { Context } from "../../store/appContext.js";

const Card = (props) => {
  const { store, actions } = useContext(Context);

  return (
    <div className="card card-starwars d-inline-block m-3" id={props.id}>
      <img src={props.imageSrc} className="card-img-top" alt=""></img>
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <div className="d-flex justify-content-end">
          <a href="#" className="btn btn-primary">
            {props.buttonText}
          </a>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  imageSrc: PropTypes.string,
  id: PropTypes.number,
  buttonText: PropTypes.string,
};

export default Card;
