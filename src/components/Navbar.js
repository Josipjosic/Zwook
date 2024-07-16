import "./Navbar.scss";
import image from "../assets/images/Logo Shape.png";
import imageArtist from "../assets/images/Vector.png";
import imageStation from "../assets/images/station.png";
import imagePremium from "../assets/images/Empty State Icon.png";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { LuLaptop } from "react-icons/lu";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { CiSettings } from "react-icons/ci";
import { FiMusic } from "react-icons/fi";
import { FaRegDotCircle } from "react-icons/fa";
import { GiOldMicrophone } from "react-icons/gi";

function Navbar() {

  const homeUrl = useLocation().pathname;
  const pathname = homeUrl.pathname


  console.log(homeUrl)

  return (
    <div className="navbar-main">
      <header className="navbar-header">
        <img src={image} alt="sidebar logo"></img>
        <h1>ZWOOK</h1>
      </header>
      <div className="navbar-content">
        <nav className="navbar-list">
          <Link to="" style={{ textDecoration: "none" }} >
            <li className="navbar-list-item" >
              <AiOutlineHome className="navbar-list-logo" />
              Home
            </li>
          </Link>
          <Link to="/" style={{ textDecoration: "none" }}>
            <li className="navbar-list-item">
              <LuLaptop className="navbar-list-logo" />
              Devices
            </li>
            <li className="navbar-list-item2">10</li>
          </Link>
          <Link to="" style={{ textDecoration: "none" }}>
            <li className="navbar-list-item">
              <AiOutlineThunderbolt className="navbar-list-logo" />
              Subscriptions
            </li>
          </Link>
          <Link to="settings" style={{ textDecoration: "none" }}>
            <li className="navbar-list-item">
              <CiSettings className="navbar-list-logo" />
              Settings
            </li>
          </Link>
          <Link to="/" style={{ textDecoration: "none" }}>
            <li className="navbar-list-item">
              <FiMusic className="navbar-list-logo" />
              Playlists
            </li>
          </Link>
          <Link to="/" style={{ textDecoration: "none" }}>
            <li className="navbar-list-item">
              <FaRegDotCircle className="navbar-list-logo" />
              Albums
            </li>
          </Link>
          <Link to="/" style={{ textDecoration: "none" }}>
            <li className="navbar-list-item">
              <img
                src={imageArtist}
                alt="artist logo"
                className="navbar-list-logo"
              />
              Artists
            </li>
          </Link>
          <Link to="/" style={{ textDecoration: "none" }}>
            <li className="navbar-list-item">
              <img
                src={imageStation}
                alt="stations logo"
                className="navbar-list-logo"
              />
              Stations
            </li>
          </Link>
          <Link to="/" style={{ textDecoration: "none" }}>
            <li className="navbar-list-item">
              <GiOldMicrophone className="navbar-list-logo" />
              Podcasts
            </li>
            <li className="navbar-list-item2">Add New</li>
          </Link>
        </nav>
      </div>
      <footer className="navbar-footer">
        <div className="navbar-title">
          <img src={imagePremium} alt="premium logo"></img>
          <h4>Update Premium</h4>
        </div>
        <section className="navbar-footer-section">
          <p>
            Your premium account is coming to an end. Please update your credit
            card information.
          </p>
          <div className="navbar-footer-proggres">
            <div className="navbar-footer-proggres-line"></div>
          </div>
        </section>
        <section className="navbar-footer-plan">
          <h5>Dismiss</h5>
          <h5 className="navbar-footer-text">Upgrade Plan</h5>
        </section>
      </footer>
    </div>
  );
}

export default Navbar;
