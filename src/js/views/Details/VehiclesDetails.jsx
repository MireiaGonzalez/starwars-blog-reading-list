import React from "react";
import { useParams } from "react-router-dom";

const VehiclesDetails = () => {
    const {id} = useParams();
    console.log({id})

    return (
        <div>
            vehicles details
        </div>
    )
}

export default VehiclesDetails;