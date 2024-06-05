import React, { useContext } from "react";
import { Context } from "../store/appContext";

import PeopleCard from "../component/PeopleCard.jsx";
import PlanetCard from "../component/PlanetCard.jsx";
import VehicleCard from "../component/VehicleCard.jsx";


const StarWarsHome = () => {
   const { store, actions} = useContext(Context);

    return (
        <>
            <div className="row mt-5">
                <div className="col-2"></div>
                <div className="col-8 text-white"><h2>Characters</h2></div>
                <div className="col-2"></div>
            </div>
            <div className="row">
                    <div className="col-2"></div>
                    <div className="col-8 d-flex overflow-auto">
                    {store.people.map(person => {
                    return(
                        <PeopleCard key={person.uid} uid={person.uid} name={person.name} url={person.url} />
                    );
                    })}
                </div>
                <div className="col-2"></div>
            </div>
            <div className="row mt-5">
                <div className="col-2"></div>
                <div className="col-8 text-white"><h2>Vehicles</h2></div>
                <div className="col-2"></div>
            </div>
            <div className="row">
                <div className="col-2"></div>
                <div className="col-8 d-flex overflow-auto">
                    {store.vehicles.map(vehicle => {
                    return(
                        <VehicleCard key={vehicle.uid}  uid={vehicle.uid } name={vehicle.name} url={vehicle.url} />
                    );
                    })}
                </div>
                <div className="col-2"></div>
            </div>
            <div className="row mt-5">
                <div className="col-2"></div>
                <div className="col-8 text-white"><h2>Planets</h2></div>
                <div className="col-2"></div>
            </div>
            <div className="row">
                <div className="col-2"></div>
                <div className="col-8 d-flex overflow-auto">
                    {store.planets.map(planet => {
                    return(
                        <PlanetCard key={planet.uid}  uid={planet.uid }name={planet.name} url={planet.url} />
                    );
                    })}
                </div>
                <div className="col-2"></div>
            </div>
        </>
    );
}

export default StarWarsHome;