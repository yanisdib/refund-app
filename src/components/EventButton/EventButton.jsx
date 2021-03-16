function EventButton({ children, icon: Component, onClick, style }) {
    return (
        <div className={`btn btn-event-${style} fw-5`} onClick={onClick}>
            <Component /> <span className="ml-2">{children}</span>
        </div>
    );
};
export default EventButton;