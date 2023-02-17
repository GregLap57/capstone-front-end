import "./ImageSection.scss";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const ImageSection = ({ galleryData }) => {
  return (
    <>
      <div className="image-section">
        {galleryData.slice(1, 4).map((image) => {
          return (
            <Link
              key={image.name}
              to="/menu"
              onClick={() => {
                toast.info(`${image.type}: ${image.name}`, {
                  position: "bottom-left",
                  autoClose: 3000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "dark",
                });
              }}
            >
              <div className="images" key={image.name}>
                <img src={image.image} alt="" className="images__image" />
              </div>
            </Link>
          );
        })}
      </div>
      <div className="gallery-link">
        <Link to="/gallery">
          <button className="gallery-button">
            <span className="gallery-button__text">Gallery</span>
          </button>
        </Link>
      </div>
    </>
  );
};

export default ImageSection;
