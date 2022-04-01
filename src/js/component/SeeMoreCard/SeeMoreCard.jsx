import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./see-more-card.css"

const SeeMoreCard = (props) => {
  return (
    <div className="card card-starwars d-inline-block align-items-center m-3" id={props.id}>
      <h5 className="card-header d-flex justify-content-center">{props.title}</h5>
      <div className="card-body p-0">
      <img src={props.imageSrc} className="card-img-top" alt=""></img>
        
      </div>
      <div className="card-footer d-flex justify-content-center p-3">
        <Link to={props.link}>
        <button href="#" className="btn btn-primary p-2">
          {props.buttonText}
        </button>
        </Link>
      </div>
    </div>
  );
};

SeeMoreCard.propTypes = {
    id: PropTypes.string,
    imageSrc: PropTypes.string,
    buttonText: PropTypes.string,
    link: PropTypes.string
}

export default SeeMoreCard;