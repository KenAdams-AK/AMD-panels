import "./PanelDetails.scss";

const PanelDetails = ({ panel }) => {
	return (
		<div className="PanelDetails__container">
			<h2 className="PanelDetails__title">{panel?.title}</h2>
			<div className="PanelDetails__category">
				<span>Category:</span> {panel?.category}
			</div>
			<div className="PanelDetails__intro">
				<span>Intro:</span> {panel?.intro}
			</div>
			<div className="PanelDetails__details">
				<span>Details:</span>
				<ul className="PanelDetails__list">
					{panel?.details.map((detail) => (
						<li className="PanelDetails__list-item" key={detail}>
							{detail}
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default PanelDetails;
