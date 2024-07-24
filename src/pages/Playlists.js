import "./Playlists.scss";
import Navbar from "../components/Navbar";
import SearchBar from "../components/Searchbar";
import Playbar from "../components/Playbar";
import featuredImg from "../assets/images/Kiss Dorka2.png";
import { PlaylistItem } from "../assets/Api/PlaylistItems";

function Playlists() {
  return (
    <div className="dashboard">
      <Navbar></Navbar>
      <div>
        <SearchBar className="dashboard-search"></SearchBar>
        <div className="dashboard-playlist">
          <div className="playlist-featured">
            <div className="playlist-featured-cont">
              <img src={featuredImg} alt="playlist thmbnl"></img>
              <div className="playlist-featured-info">
                <h5>Playlist</h5>
                <h1>Midnight Melodies</h1>
                <h5>New release "Impresions" coming June 16</h5>
              </div>
            </div>
          </div>
          <table className="playlist-table">
            <tbody>
              <tr style={{ borderBottom: "1px solid #4A4D55" }}>
                <th
                  style={{ width: "50px", borderBottom: "1px solid #4A4D55" }}
                >
                  #
                </th>
                <th>Title</th>
                <th>Album</th>
                <th>Data Added</th>
                <th>Song TIme</th>
              </tr>
            </tbody>
          </table>
          {PlaylistItem.map((item, i) => {
            return (
              <table className="playlist-table">
                <tbody>
                  <tr>
                    <td style={{ width: "50px" }}>{i}</td>
                    <td>
                      <div className="table-title-container">
                        <img src={item.userImg} alt="thumbnail"></img>
                        <div className="table-title-info">
                          <h3>{item.title}</h3>
                          <p>{item.name}</p>
                        </div>
                      </div>
                    </td>
                    <td>{item.album}</td>
                    <td>{item.added}</td>
                    <td>{item.time}</td>
                  </tr>
                </tbody>
              </table>
            );
          })}
        </div>
        <Playbar className="dashboard-playbar"></Playbar>
      </div>
    </div>
  );
}

export default Playlists;
