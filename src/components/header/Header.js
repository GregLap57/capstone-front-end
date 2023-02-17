import { Link } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  return (
    <header>
      <nav className="nav">
        <h2 className="nav__heading">Carribean Essence</h2>
        <div className="nav__div">
          <Link to="/">
            <h3 className="nav__subheading">Home</h3>
          </Link>
          <Link to="/menu">
            <h3 className="nav__subheading">Menu</h3>
          </Link>
          <Link to="/order">
            <h3 className="nav__subheading">Order</h3>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
