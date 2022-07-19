import "./List.scss";

const List = ({ items, renderItems }) => {
	return <div className="List__container">{items.map(renderItems)}</div>;
};

export default List;
