import React from "react";
import "./Playbar.scss";
import artistImg from "../assets/images/CategPic4.png";
import imgShuff from "../assets/images/Shuffle.png";
import imgPrev from "../assets/images/Prev.png";
import imgPlay from "../assets/images/Play.png";
import imgNext from "../assets/images/Next.png";
import imgRepe from "../assets/images/Repeat.png";
import imgSnd from "../assets/images/Sound.png";

function SearchBar() {
  return (
    <section className="playbar-main">
      <div className="playbar-artist">
        <div>
          <img src={artistImg} alt="artist thumbnail"></img>
        </div>
        <div className="playbar-artist-text">
          <a href="/playlists">Artist Song</a>
          <p>Artist Name</p>
        </div>
      </div>
      <div className="playbar-controls">
        <div className="playbar-controls-main">
          <div className="playbar-control">
            <img src={imgShuff} alt="shuffle"></img>
            <img src={imgPrev} alt="previous"></img>
            <img src={imgPlay} alt="play"></img>
            <img src={imgNext} alt="next"></img>
            <img src={imgRepe} alt="repeat"></img>
          </div>
          <div className="playbar-status">
            <p>0:34</p>
            <div className="playbar-status-back">
              <div className="playbar-status-prog"></div>
            </div>
            <p>3:57</p>
          </div>
        </div>
      </div>
      <div className="playbar-volume">
        <div>
          <img src={imgSnd} alt="sound"></img>
        </div>
        <div className="playbar-volume-back">
          <div className="playbar-volume-prog"></div>
        </div>
      </div>
    </section>
  );
}

export default SearchBar;
