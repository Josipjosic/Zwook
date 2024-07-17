import React from "react";
import "./Searchbar.scss";
import { IoSearchOutline } from "react-icons/io5";
import { IconContext } from "react-icons";
import { RiPulseLine } from "react-icons/ri";
import { FaRegBell } from "react-icons/fa";
import UserImg from "../assets/images/Image=Albert Flores.png";
import { IoIosArrowDown } from "react-icons/io";

function SearchBar() {
  var placeholder = "Search anything here";

  return (
    <div className="searchbar-grid">
      <div className="searchbar-main">
        <section className="searchbar-section">
          <IconContext.Provider value={{ color: "#9aa3b2", size: "20px" }}>
            <IoSearchOutline />
          </IconContext.Provider>
          <input
            type="text"
            placeholder={placeholder}
            className="input-form"
          ></input>
        </section>
        <section className="searchbar-info">
          <IconContext.Provider value={{ color: "#9aa3b2", size: "20px" }}>
            <RiPulseLine  className="searchbar-icon"/>
          </IconContext.Provider>
          <IconContext.Provider value={{ color: "#9aa3b2", size: "20px" }}>
            <FaRegBell className="searchbar-icon"/>
          </IconContext.Provider>
          <div className="searchbar-user">
            <div>
              <img src={UserImg} alt="user profile"></img>
              <div className="searchbar-status"></div>
            </div>
            <div className="user-info ">
              <h4>Albert Flores</h4>
              <p>alber@flores.com</p>
            </div>
            <div>
              <IconContext.Provider value={{ color: "#9aa3b2", size: "20px" }}>
                <IoIosArrowDown className="searchbar-icon"/>
              </IconContext.Provider>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default SearchBar;
