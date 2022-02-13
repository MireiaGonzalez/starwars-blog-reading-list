import React, { useEffect, useContext } from "react";
import "./home.css";
import { Context } from "../../store/appContext.js";
//Service
import { getAllPeople } from "../../service/starwars.js";

//Component
import Card from "../../component/Card/Card.jsx";

const Home = () => {

    const {store, actions} = useContext(Context);
    console.log(store);

    const getPeople = async () => {
        try{
            const res = await getAllPeople();
            const json = await res.json();
            console.log(json);

        }catch(err){
            console.log(err)
        }
    }

    useEffect(() => {
        getPeople();
    }, [])

    return (
        <div>
            <h1>Home</h1>
            <Card />
        </div>
    )
}

export default Home;