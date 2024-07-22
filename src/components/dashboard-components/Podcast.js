import "./Podcast.scss"
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
    status: "Ofline",
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
    status: "Online",
    userImg: userImg5,
  },
];

function Podcast() {
  return (
    <section className="podcast-main">
      <h3>Podcast</h3>
      <div className="podcast-items">
        {podcastList.map((item) => {
          return (
            <ul>
              <li>
                <div>
                  <img src={item.userImg} alt="user-profile"></img>
                  <p>{item.status}</p>
                  <p>{item.badge}</p>
                  <h3>{item.name}</h3>
                </div>
              </li>
            </ul>
          );
        })}
      </div>
    </section>
  );
}

export default Podcast;
