import React from "react"
import PropTypes from "prop-types";

//Icons
import FilledHeart from "../FilledHeart/FilledHeart.jsx";
import EmptyHeart from "../EmptyHeart/EmptyHeart.jsx";

const HeartButton = (props) => {
    return (
        <button
            type="button"
            className="btn btn-danger me-2"
            onClick={() => {
                if (store.favourites.includes(props.char) === true) {
                  actions.deleteFavourite(props.char.uid);
                } else {
                  actions.setFavourites(props.char);
                }
              }}
          >
            <div>{store.favourites.includes(props.char) === true ? (
                <FilledHeart />
            ) : (
                <EmptyHeart />
            )}</div>
          </button>
    )
}

HeartButton.propTypes = {
    char: PropTypes.string,
}

export default HeartButton;