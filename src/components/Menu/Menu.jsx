import "./Menu.models.scss";

const Menu = ({ isOpen }) => {
  return (
    <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
      <ul className="menu-list"></ul>
    </div>
  );
};

export default Menu;
