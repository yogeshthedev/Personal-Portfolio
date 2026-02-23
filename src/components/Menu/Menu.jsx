import "./Menu.models.scss";

const Menu = ({ isOpen, setIsOpen }) => {
  const handleScroll = (id) => {
    setIsOpen(false);

    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
      });
    }, 400); 
  };

  return (
    <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
      <ul className="menu-list">
        <li onClick={() => handleScroll("home")}>
          <span>Home</span>
        </li>
        <li onClick={() => handleScroll("projects")}>
          <span>Projects</span>
        </li>
        <li onClick={() => handleScroll("about")}>
          <span>About</span>
        </li>
        <li onClick={() => handleScroll("contact")}>
          <span>Contact</span>
        </li>
      </ul>
    </div>
  );
};

export default Menu;