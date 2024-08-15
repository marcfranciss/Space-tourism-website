import { Link, NavLink } from "react-router-dom";
import "./navbar.scss";
import navLogo from "../../assets/shared/logo.svg";
import burgerIcon from "../../assets/shared/icon-hamburger.svg";
import closeIcon from "../../assets/shared/icon-close.svg";
import { useState } from "react";

const NavBar = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <header>
      <div className='nav-logo'>
        <Link to={""} className='logo-container'>
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
      <div className='burger'>
        <img src={burgerIcon} alt='burger icon' onClick={openModal} />
      </div>

      <dialog
        id='nav-modal'
        className={isModalOpen ? "open" : "close"}
        onClick={closeModal}>
        <nav className='mobile-nav-links'>
          <div className='close-icon' onClick={closeModal}>
            <img src={closeIcon} alt='' />
          </div>
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
      </dialog>
    </header>
  );
};

export default NavBar;
