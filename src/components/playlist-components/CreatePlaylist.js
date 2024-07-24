import "./CreatePlaylist.scss";

function CreatePlaylist() {
  return (
    <section className="create-playlist-main">
      <div className="create-playlist-content">
        <div className="create-playlist-form">
          <h3>Title</h3>
          <div className="form-wrapper">
            <input type="text" placeholder="Enter station title"></input>
          </div>
        </div>
        <div className="create-playlist-form">
          <h3>Description link</h3>
          <div className="form-wrapper">
            <input type="text" placeholder="Enter website URL"></input>
          </div>
        </div>
        <div className="create-playlist-form">
          <h3>Description</h3>
          <div className="form-wrapper">
            <input type="text" placeholder="Enter station description" style={{ paddingBottom: "109px" }}></input>
          </div>
        </div>
        <div className="create-playlist-check">
          <input type="checkbox" className="playlist-checkbox"></input>
          <label>Status</label>
        </div>
        <div className="create-playlist-check">
          <input type="checkbox" className="playlist-checkbox"></input>
          <label>Premium</label>
        </div>
        <div className="create-playlist-check">
          <input type="checkbox" className="playlist-checkbox"></input>
          <label>Make Default</label>
        </div>
        <div className="create-playlist-check">
          <input type="checkbox" className="playlist-checkbox"></input>
          <label>Visible on the Portal</label>
        </div>
      </div>
    </section>
  );
}

export default CreatePlaylist;
