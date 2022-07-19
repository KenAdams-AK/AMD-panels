import * as ROUTES from "./api/routes";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.scss";
import HomePage from "./pages/HomePage/HomePage";
import FavouritesPage from "./pages/FavouritesPage/FavouritesPage";
import { useEffect, useState } from "react";
import axios from "axios";
import { GET_PANELS_URL } from "./api/endpoints";

export const LS_FAV_KEY = "favourites panels";

function App() {
	const [isLoading, setIsLoading] = useState(true);
	const [panels, setPanels] = useState([]);
	const [getDataError, setGetDataError] = useState("");
	const [favourites, setFavourites] = useState(
		JSON.parse(localStorage.getItem(LS_FAV_KEY)) ?? []
	);

	useEffect(() => {
		axios
			.get(GET_PANELS_URL)
			.then((response) => {
				setPanels(response?.data);
				setIsLoading(false);
			})
			.catch((error) => {
				setGetDataError(error?.message);
				setIsLoading(false);
			});
	}, []);

	const handleSetFavourites = (panel) => {
		const updatedFavourites = [...favourites, panel];
		setFavourites(updatedFavourites);
		localStorage.setItem(LS_FAV_KEY, JSON.stringify(updatedFavourites));
	};

	const handleRemoveFavourites = (panel) => {
		window.confirm("Remove from favourites?");
		const updatedFavourites = favourites.filter((item) => item.id !== panel.id);
		setFavourites(updatedFavourites);
		localStorage.setItem(LS_FAV_KEY, JSON.stringify(updatedFavourites));
	};

	return (
		<div className="App__container">
			<Routes>
				<Route
					path={ROUTES.ROUTE_HOME}
					element={
						<HomePage
							isLoading={isLoading}
							panels={panels}
							getDataError={getDataError}
							favourites={favourites}
							handleSetFavourites={handleSetFavourites}
							handleRemoveFavourites={handleRemoveFavourites}
						/>
					}
				/>
				<Route
					path={ROUTES.ROUTE_FAVOURITES}
					element={
						<FavouritesPage
							favourites={favourites}
							handleRemoveFavourites={handleRemoveFavourites}
						/>
					}
				/>
				<Route path="*" element={<Navigate to="/" />} />
			</Routes>
		</div>
	);
}

export default App;
