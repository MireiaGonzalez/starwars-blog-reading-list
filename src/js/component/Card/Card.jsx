import React, { useContext } from "react";
import PropTypes from "prop-types";
import "./card.css";
import { Context } from "../../store/appContext.js";

const Card = (props) => {
  const {store, actions} = useContext(Context);

  return (
    <div className="card card-starwars d-inline-block m-3" id={props.id}>
      <img src={props.imageSrc} className="card-img-top" alt=""></img>
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">
          p element
        </p>
        <a href="#" className="btn btn-primary">
          check out more
        </a>
      </div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  imageSrc: PropTypes.string,
  id: PropTypes.number
}

export default Card;
