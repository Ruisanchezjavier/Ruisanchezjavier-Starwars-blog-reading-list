import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const {store, actions } = useContext(Context);

	const deleteFavoritesOperator = (deleteItem) => {
		actions.removeFavorite(deleteItem);
	};
	return (
		<nav className="navbar navbar-expand-lg">
			<Link to="/">
				<img src="https://media.sketchfab.com/models/3cb31e7865994304bebad83c85f3c5ee/thumbnails/d152bc5c46d34bc9906e8a5efb682a1d/abb425cbbb0d4bf58665aa6fb2d93e4b.jpeg" style={{height: 30}} />
			</Link>
			<div className="ml-auto mx-3">
				<ul className="navbar-nav">
				 <li className="nav-item dropdown">
					<a className="btn btn-secondary dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
					favorites
					</a>
						<ul className="dropdown-menu dropdown-menu-end bg-light.bg-gradient" aria-labelledby="navbarDropdown">
							{store.favorites.map((favoriteItem, index) => (
								<li key={index}>
								  <div className="d-flex justify-content-between">
									<span className="dropdown-item">{favoriteItem}</span>
									<button className="btn btn-sm" onClick={() => deleteFavoritesOperator(favoriteItem)}>
										<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-circle d-flex justify-content-end" viewBox="0 0 16 16">
											<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
											<path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
										</svg>
									</button>
								  </div>
								</li>
							))}
						</ul>
					</li>
				</ul>
			</div>
		</nav>
	);
};
