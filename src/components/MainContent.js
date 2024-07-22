import React from "react";
import "./MainContent.scss";
import image1 from "../assets/images/abstract-image-1.png";
import image2 from "../assets/images/abstract-image-2.png";
import { BsArrowUpRight } from "react-icons/bs";
import Podcast from "./dashboard-components/Podcast";

function MainContent() {
  return (
    <div className="content-grid">
      <div className="content-main">
        <section className="content-header">
          <div className="content-image-info">
            <BsArrowUpRight className="image-arrow" />
            <h2>Midnight Melodies</h2>
            <p>New release "Impresions" coming June,16</p>
            <img src={image1} alt="Placeholder"></img>
          </div>
          <div className="content-image-info">
            <BsArrowUpRight className="image-arrow" />
            <h2>Virgos</h2>
            <p>New release "Impresions" coming July,26</p>
            <img src={image2} alt="Placeholder"></img>
          </div>
        </section>
        <Podcast />
        <Podcast />
        <Podcast />
      </div>
    </div>
  );
}

export default MainContent;
