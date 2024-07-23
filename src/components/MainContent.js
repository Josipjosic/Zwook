import React, { useState, useEffect } from "react";
import "./MainContent.scss";
import { Link } from "react-router-dom";
import image1 from "../assets/images/abstract-image-1.png";
import image2 from "../assets/images/abstract-image-2.png";
import { BsArrowUpRight } from "react-icons/bs";
import Slider from "./dashboard-components/Slider";
import Gallery from "./dashboard-components/Gallery";
import { itemsFeat } from "../assets/Api/ImagesFeatured";
import { itemsCateg } from "../assets/Api/ImagesCategories";

function MainContent() {
  const [buttonState, setButtonState] = useState("All");
  const [data, setData] = useState(itemsFeat);

  useEffect(() => {
    console.log(data);
    const newData = [...data];
    console.log(buttonState);
    if (buttonState === "Premium") {
      const filtered = newData.filter((item) => item.badge === "Premium");
      console.log(filtered);
      setData(filtered);
    } else if (buttonState === "All") {
      setData(itemsFeat);
    }
  }, [buttonState, data]);

  return (
    <div className="content-grid">
      <div className="content-main">
        <section className="content-header">
          <div className="content-image-info">
            <BsArrowUpRight className="image-arrow" />
            <h2>Midnight Melodies</h2>
            <p>New release "Impresions" coming June,16</p>
            <Link
              to="/playlists"
              className="button-auth"
              style={{ textDecoration: "none" }}
            >
              <img src={image1} alt="Placeholder"></img>
            </Link>
          </div>
          <div className="content-image-info">
            <BsArrowUpRight className="image-arrow" />
            <h2>Virgos</h2>
            <Link
              to="/playlists"
              className="button-auth"
              style={{ textDecoration: "none" }}
            >
              <img src={image2} alt="Placeholder"></img>
            </Link>
          </div>
        </section>

        <div className="podcast-info">
          <h2>Podcasts</h2>
          <a href="/">
            <div className="podcast-link">View All</div>
          </a>
        </div>
        <Slider />
        <div className="podcast-info">
          <div>
            <h2>Featured</h2>
          </div>
          <div className="button-main">
            <button
              className={
                buttonState.includes("All")
                  ? "featured-button active"
                  : "featured-button"
              }
              value="All"
              onClick={(e) => {
                setButtonState(e.target.value);
              }}
            >
              All
            </button>
            <button
              className={
                buttonState.includes("Premium")
                  ? "featured-button active"
                  : "featured-button"
              }
              value="Premium"
              onClick={(e) => {
                setButtonState(e.target.value);
              }}
            >
              Premium
            </button>
            <button
              className={
                buttonState.includes("Disabled")
                  ? "featured-button active"
                  : "featured-button"
              }
              value="Disabled"
              onClick={(e) => {
                setButtonState(e.target.value);
              }}
            >
              Disabled
            </button>
          </div>
        </div>
        <Gallery state={buttonState} data={data} />
        <div className="podcast-info">
          <h2>Categories</h2>
          <a href="/">
            <div className="podcast-link">View All</div>
          </a>
        </div>
        <Gallery data={itemsCateg} />
      </div>
    </div>
  );
}

export default MainContent;
