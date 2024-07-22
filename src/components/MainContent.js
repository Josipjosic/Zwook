import React, { useState } from "react";
import "./MainContent.scss";
import image1 from "../assets/images/abstract-image-1.png";
import image2 from "../assets/images/abstract-image-2.png";
import { BsArrowUpRight } from "react-icons/bs";
import Slider from "./dashboard-components/Slider";
import Gallery from "./dashboard-components/Gallery";
import  { items } from "../assets/Api/ImagesFeatured"
import { itemsCateg } from "../assets/Api/ImagesCategories";

function MainContent() {

  const [buttonState, setButtonState] = useState ()


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
            <button className="featured-button" value="All" onClick={(e)=>{setButtonState(e.target.value)}}>All</button>
            <button className="featured-button" value="Premium" onClick={(e)=>{setButtonState(e.target.value)}}>Premium</button>
            <button className="featured-button" value="Disabled" onClick={(e)=>{setButtonState(e.target.value)}}>Disabled</button>
          </div>
        </div>
        <Gallery state={buttonState} data={items}/>
        <div className="podcast-info">
          <div>
            <h2>Categories</h2>
          </div>
          <div className="button-main">
          </div>
        </div>
        <Gallery state={buttonState} data={itemsCateg}/>
      </div>
    </div>
  );
}

export default MainContent;
