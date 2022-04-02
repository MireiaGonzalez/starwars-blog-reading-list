import React from "react";
import { useParams } from "react-router-dom";

const PlanetsDetails = () => {
    const {id} = useParams();
    console.log({id})

    return (
        <div>
            planets details
        </div>
    )
}

export default PlanetsDetails;