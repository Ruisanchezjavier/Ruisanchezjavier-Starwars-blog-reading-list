import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

import '../../styles/peopleCard.css'

const PersonDetails = ( uid ) => {
	const { store, actions } = useContext(Context);
    const params = useParams();
	const { id } = useParams();

    useEffect(() => {
        actions.getPersonDetails(params.id)
    }, [])

	return (
		<div className="jumbotron">
			<div className="d-flex">
				<h1 className="display-4">{store.personDetails.properties.name}</h1>
			</div>
			<div className="d-flex" style={{width: '14rem'}}>
				<img src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg` }
                className="card-img-top" alt="..." />
			</div>
			<ul className="people-information">
				<li>Height: {store.personDetails.properties.height}</li>
				<li>Mass: {store.personDetails.properties.mass}</li>
				<li>Hair color: {store.personDetails.properties.hair_color}</li>
				<li>Skin color: {store.personDetails.properties.skin_color}</li>
				<li>Eye color: {store.personDetails.properties.eye_color}</li>
				<li>birth year: {store.personDetails.properties.birth_year}</li>
				<li>Gender: {store.personDetails.properties.gender}</li>
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

PersonDetails.propTypes = {
	match: PropTypes.object
};

export default PersonDetails;
