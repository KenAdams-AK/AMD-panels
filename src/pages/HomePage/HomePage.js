import List from "../../components/List/List";
import PanelItem from "../../components/PanelItem/PanelItem";
import { useNavigate } from "react-router-dom";
import "./HomePage.scss";
import { ROUTE_FAVOURITES } from "../../api/routes";

const HomePage = ({
	isLoading,
	panels,
	getDataError,
	favourites,
	handleSetFavourites,
	handleRemoveFavourites,
}) => {
	const navigate = useNavigate();

	const renderPanels = (panel) => (
		<PanelItem
			key={panel.id}
			panel={panel}
			favourites={favourites}
			handleSetFavourites={handleSetFavourites}
			handleRemoveFavourites={handleRemoveFavourites}
		/>
	);

	if (isLoading) {
		return <div className="HomePage__loader">Loading...</div>;
	}

	if (getDataError) {
		return (
			<div className="HomePage__error">
				Something went wrong. Error type: {getDataError}.
			</div>
		);
	}

	return (
		<div className="HomePage__container">
			<div className="HomePage__header">
				<h1 className="HomePage__title">List of services</h1>
				<button
					className="HomePage__favourites"
					onClick={() => navigate(ROUTE_FAVOURITES)}
					disabled={!favourites?.length}
				>
					Favorites
					{favourites?.length > 0 && <span>{favourites.length}</span>}
				</button>
			</div>
			<List items={panels} renderItems={renderPanels} />
		</div>
	);
};

export default HomePage;
