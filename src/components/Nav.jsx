import { NavLink } from "react-router";
import "./Nav.css";

function Nav() {
  return (
    <nav className="nav">
      <div className="container">
        <a href="" className="logo">
          Page<span className="logo-highlight">flow</span>
        </a>
        <ul className="nav-items-list">
          <li className="nav-item">
            <NavLink to="/">Discover</NavLink>
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
