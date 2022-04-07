import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./card.css";

const Card = (props) => {
  return (
    <div className={`card d-inline-block m-3 ${props.cardType}`} id={props.id}>
      <img src={props.imageSrc} className="card-img-top" alt=""></img>
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <div className="d-flex justify-content-end mt-3">
        <button
            type="button"
            className="btn btn-danger me-2"
            onClick={props.onClickFunction}
          >
            <div>{props.icon}</div>
          </button>
          <Link
            to={`/details/${props.detailsType}/${props.detailsId}`}
            className="btn btn-primary"
          >
            Details
          </Link>
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
  cardType: PropTypes.string,
  detailsType: PropTypes.string,
  detailsId: PropTypes.string,
  onClickFunction: PropTypes.func,
  icon: PropTypes.node,
};

export default Card;
