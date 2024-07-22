import "./Slider.scss";
import userImg1 from "../../assets/images/user1.png";
import userImg2 from "../../assets/images/user2.png";
import userImg3 from "../../assets/images/user3.png";
import userImg4 from "../../assets/images/user4.png";
import userImg5 from "../../assets/images/user5.png";

let podcastList = [
  {
    id: "0",
    name: "Mind Matters",
    badge: "Premium",
    status: "Online",
    userImg: userImg1,
  },
  {
    id: "1",
    name: "Tech Talk",
    badge: "Premium",
    status: "Offline",
    userImg: userImg2,
  },
  {
    id: "2",
    name: "History Quest",
    badge: "Premium",
    status: "Online",
    userImg: userImg3,
  },
  {
    id: "3",
    name: "Mystery Junction",
    badge: "Premium",
    status: "Online",
    userImg: userImg4,
  },
  {
    id: "4",
    name: "Creative minds",
    badge: "Premium",
    status: "Offline",
    userImg: userImg5,
  },
  {
    id: "5",
    name: "Tech Talk",
    badge: "Premium",
    status: "Offline",
    userImg: userImg2,
  },
];

function Slider() {
  return (
    <div className="podcast-main">
      <section className="podcast-slider">
        <div className="podcast-items">
          {podcastList.map((item) => {
            return (
              <ul key={item.id}>
                <li >
                  <div className="item-content" >
                    <a href="/">
                      <img src={item.userImg} alt="user-profile"></img>
                    </a>
                    <div className="item-status">
                      <div
                        className={
                          item.status.includes("Offline")
                            ? "item-status-icon active"
                            : "item-status-icon "
                        }
                      ></div>
                      <p
                        className={
                          item.status.includes("Offline")
                            ? "item-status-info active"
                            : ""
                        }
                      >
                        {item.status}
                      </p>
                    </div>
                    <div className="item-info">
                      <h3>{item.name}</h3>
                      <p>{item.badge}</p>
                    </div>
                  </div>
                </li>
              </ul>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default Slider;
