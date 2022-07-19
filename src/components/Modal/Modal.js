import "./Modal.scss";

const Modal = ({ setIsModalOpen, title, children }) => {
	const closeModal = (e) => {
		e.stopPropagation();
		setIsModalOpen(false);
	};

	return (
		<>
			<div className="Modal__overlay" onClick={closeModal}>
				<div className="Modal__window" onClick={(e) => e.stopPropagation()}>
					<button className="Modal__close-btn" onClick={closeModal}>
						&#10005;
					</button>
					<h2 className="Modal__header">{title}</h2>
					<div className="Modal__content">{children}</div>
				</div>
			</div>
		</>
	);
};

export default Modal;
