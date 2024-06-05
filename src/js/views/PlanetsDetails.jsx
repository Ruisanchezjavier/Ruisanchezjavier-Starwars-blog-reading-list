import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

import '../../styles/peopleCard.css'

const PlanetsDetails = ( uid ) => {
	const { store, actions } = useContext(Context);
    const params = useParams();
	const { id } = useParams();

    useEffect(() => {
        actions.getPlanetsDetails(params.id)
    }, [])

	return (
		<div className="jumbotron">
			<h1 className="display-4">{store.planetsDetails.properties.name}</h1>
			<div className="d-flex" style={{width: '14rem'}}>
			<img src={uid == 1
                ? "https://upload.wikimedia.org/wikipedia/en/6/6d/Tatooine_%28fictional_desert_planet%29.jpg"
                : `https://starwars-visualguide.com/assets/img/planets/${id}.jpg`

                } 
                className="card-img-top" alt="..." />
			</div>
			<ul className="people-information">
				<li>Height: {store.planetsDetails.properties.gravity}</li>
				<li>Mass: {store.planetsDetails.properties.orbital_period}</li>
				<li>Hair color: {store.planetsDetails.properties.population}</li>
				<li>Skin color: {store.planetsDetails.properties.climate}</li>
				<li>Eye color: {store.planetsDetails.properties.created}</li>
				<li>birth year: {store.planetsDetails.properties.diameter}</li>
				<li>Gender: {store.planetsDetails.properties.terrain}</li>
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

export default PlanetsDetails;

PlanetsDetails.propTypes = {
	match: PropTypes.object
};