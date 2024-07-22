import { useState } from "react";
import "./Gallery.scss";

function Gallery(props) {

    console.log(props.data)
  return (
    <section>
      <div className="gallery-row">
        {props.data.map((item) => {
          return (
            <ul className="gallery-items">
              <li key={item.id}>
                <div>
                  <a href="/">
                    <img src={item.userImg} alt="user-profile"></img>
                  </a>
                  <div>
                    <h3>{item.name}</h3>
                  </div>
                </div>
              </li>
            </ul>
          );
        })}
      </div>
    </section>
  );
}

export default Gallery;
