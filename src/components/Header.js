import "./Header.css";

import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <p className="appName">
        WebFlix
        <span className="icon" role="img" aria-label="camera">
          🎥‍
        </span>
      </p>
      <nav>
        <NavLink
          to={"/"}
          className={({ isActive }) => (isActive ? "link active" : "link")}
        >
          Home
        </NavLink>
        <NavLink
          to={"/favourites"}
          className={({ isActive }) => (isActive ? "link active" : "link")}
        >
          Favoris
        </NavLink>
      </nav>
    </div>
  );
}

export default Header;
