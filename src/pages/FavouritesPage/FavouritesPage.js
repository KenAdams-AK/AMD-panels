import { useEffect } from "react";
import List from "../../components/List/List";
import PanelItem from "../../components/PanelItem/PanelItem";
import { useNavigate } from "react-router-dom";
import "./FavouritesPage.scss";
import { ROUTE_HOME } from "../../api/routes";

const FavouritesPage = ({ favourites, handleRemoveFavourites }) => {
	const navigate = useNavigate();

	useEffect(() => {
		favourites?.length === 0 && navigate(ROUTE_HOME);
	}, [favourites]);

	return (
		<div className="FavouritesPage__container">
			<h1 className="FavouritesPage__title">Favorites</h1>
			<List
				items={favourites}
				renderItems={(panel) => (
					<PanelItem
						key={panel?.id}
						panel={panel}
						isFavouritesPageOpen={true}
						handleRemoveFavourites={handleRemoveFavourites}
					/>
				)}
			/>
		</div>
	);
};

export default FavouritesPage;
