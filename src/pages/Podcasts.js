import Navbar from "../components/Navbar";
import SearchBar from "../components/Searchbar";
import "../pages/Podcasts.scss";
import CreatePlaylist from "../components/playlist-components/CreatePlaylist"
import UploadFile from "../components/playlist-components/UploadFile"

function Podcasts() {
  return (
    <div className="dashboard">
      <Navbar></Navbar>
      <div>
        <SearchBar></SearchBar>
        <section className="podcast-main">
          <header className="podcast-header">
            <div>
              <h2>Create New Podcast</h2>
            </div>
            <div>
                <button className="button-cancel">Cancel</button>
                <button className="button-save">Save</button>
            </div>
          </header>
          <section className="podcast-content">
            <CreatePlaylist></CreatePlaylist>
            <UploadFile></UploadFile>
          </section>
        </section>
      </div>
    </div>
  );
}

export default Podcasts;
