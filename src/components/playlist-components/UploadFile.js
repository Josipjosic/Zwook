import "./UploadFile.scss";
import uploadImg from "../../assets/images/Button.png";

function UploadFile() {
  return (
    <section className="upload-file-main">
      <div className="upload-file-content">
        <div className="upload-file-intr">
          <img src={uploadImg} alt="upload"></img>
          <h3>
            <a href="/">Click to upload</a> or drag and drop
          </h3>
          <p>SVG, PNG, JPEG, TIFF or GIF</p>
        </div>
      </div>
      <div className="upload-file-button">
        <button>Upload Image</button>
      </div>
    </section>
  );
}

export default UploadFile;
