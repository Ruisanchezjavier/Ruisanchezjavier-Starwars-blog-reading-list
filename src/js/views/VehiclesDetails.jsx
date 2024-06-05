import React, {useEffect, useState, useContext} from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

import '../../styles/peopleCard.css'

const VehiclesDetails= ( uid ) => {
	const { store, actions } = useContext(Context);
    const params = useParams();
	const { id } = useParams();

    useEffect(() => {
        actions.getVehiclesDetails(params.id)
    }, [])

	return (
		<div className="jumbotron">
			<h1 className="display-4">{store.vehiclesDetails.properties.name}</h1>
			<div className="d-flex" style={{width: '16rem'}}>
				<img src={`https://starwars-visualguide.com/assets/img/vehicles/${id}.jpg`} className="card-img-top" alt="..." />
			</div>
			<ul className="people-information">
				<li>Height: {store.vehiclesDetails.properties.cargo_capacity}</li>
				<li>consumables: {store.vehiclesDetails.properties.consumables}</li>
				<li>cost in credits : {store.vehiclesDetails.properties.cost_in_credits}</li>
				<li>created : {store.vehiclesDetails.properties.created}</li>
				<li>crew : {store.vehiclesDetails.properties.crew}</li>
				<li>manufacturer : {store.vehiclesDetails.properties.manufacturer}</li>
				<li>max_atmosphering_speed : {store.vehiclesDetails.properties.max_atmosphering_speed}</li>
                <li>model : {store.vehiclesDetails.properties.model}</li>
                <li>passengers : {store.vehiclesDetails.properties.passengers}</li>
                
			</ul>

			<hr className="my-4" />

			<Link to="/">
				<span className="btn btn-primary btn-lg" href="#" role="button">
					Back home
				</span>
			</Link>
		</div>
	);
};

export default VehiclesDetails;

VehiclesDetails.propTypes = {
	match: PropTypes.object
};