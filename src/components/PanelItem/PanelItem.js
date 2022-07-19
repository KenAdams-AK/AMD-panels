import "./PanelItem.scss";
import { useState } from "react";
import Modal from "../Modal/Modal";
import PanelDetails from "../PanelDetails/PanelDetails";

const PanelItem = ({
	panel,
	favourites,
	handleSetFavourites,
	handleRemoveFavourites,
	isFavouritesPageOpen,
}) => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [isFavourite, setIsFavourite] = useState(
		favourites?.filter((item) => item?.id === panel?.id).length > 0
	);

	return (
		<>
			<div className="PanelItem__container">
				<h2 className="PanelItem__title">{panel?.title}</h2>
				<div className="PanelItem__category">Categoty: {panel?.category}</div>
				<div className="PanelItem__intro">{panel?.intro}</div>
				<div className="PanelItem__actions">
					<button
						className="PanelItem__button details"
						onClick={() => setIsModalOpen(true)}
					>
						See details
					</button>
					{!isFavourite && !isFavouritesPageOpen && (
						<button
							className="PanelItem__button add-to-favourites"
							onClick={() => {
								handleSetFavourites(panel);
								setIsFavourite(true);
							}}
						>
							Add
						</button>
					)}
					{(isFavourite || isFavouritesPageOpen) && (
						<button
							className="PanelItem__button remove-from-favourites"
							onClick={() => handleRemoveFavourites(panel, setIsFavourite)}
						>
							Remove
						</button>
					)}
				</div>
			</div>
			{isModalOpen && (
				<Modal title="Details" setIsModalOpen={setIsModalOpen}>
					<PanelDetails panel={panel} />
				</Modal>
			)}
		</>
	);
};

export default PanelItem;
