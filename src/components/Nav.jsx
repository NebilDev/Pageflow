import { NavLink } from "react-router";
import "./Nav.css";

function Nav() {
  return (
    <nav className="nav">
      <div className="container">
        <NavLink to="/" className="logo">
          Page<span className="logo-highlight">flow</span>
        </NavLink>
        <ul className="nav-items-list">
          <li className="nav-item">
            <NavLink to="/discover">Discover</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/library">Library</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
