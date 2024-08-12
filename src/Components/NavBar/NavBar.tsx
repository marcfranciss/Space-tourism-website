import { Link, NavLink } from "react-router-dom";
import "./navbar.scss";
import navLogo from "../../assets/shared/logo.svg";

const NavBar = () => {
  return (
    <header>
      <div className='nav-logo'>
        <Link to={""}>
          <img src={navLogo} alt='Webpage Logo: Star' />
        </Link>
        <div className='line-design'></div>
      </div>
      <nav className='nav-links'>
        <NavLink
          to=''
          className={({ isActive }) => (isActive ? "link-active" : "")}>
          <strong>00</strong>Home
        </NavLink>
        <NavLink
          to={"destination"}
          className={({ isActive }) => (isActive ? "link-active" : "")}>
          <strong>01</strong> Destination
        </NavLink>
        <NavLink
          to={"crew"}
          className={({ isActive }) => (isActive ? "link-active" : "")}>
          <strong>02</strong> Crew
        </NavLink>
        <NavLink
          to={"technology"}
          className={({ isActive }) => (isActive ? "link-active" : "")}>
          <strong>03</strong> Technology
        </NavLink>
      </nav>
    </header>
  );
};

export default NavBar;
