import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./header.css";

const nav_links = [
  {
    path: "/characters",
    display: "Characters",
  },
  {
    path: "/comics",
    display: "Comics",
  },
];
const Header = () => {
  return (
    <header>
      <div className="marvel_information_portal">
        <h4 className="title_bold_28">
          <Link to={'/'} className='hype'>
            <span>Marvel</span> information portal
          </Link>
        </h4>
      </div>
      <ul className="mini_nav">
        {nav_links.map((item, index) => (
          <li className="nav__item" key={index}>
            <NavLink
              to={item.path}
              className={(navClass) =>
                navClass.isActive ? "active__link" : "nav_link"
              }
            >
              {item.display}
            </NavLink>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Header;
