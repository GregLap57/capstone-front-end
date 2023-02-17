import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import "./GalleryPage.scss";

const GalleryPage = () => {
  const apiUrl = "http://localhost:8080";
  const [galleryData, setGalleryData] = useState();

  useEffect(() => {
    //Retrieving GalleryPage Data
    const getGalleryData = async () => {
      try {
        const res = await axios.get(`${apiUrl}/gallery`);
        setGalleryData(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    getGalleryData();
  }, []);

  //Carousel Logic
  const track = document.querySelector(".gallery");
  const handleOnDown = (e) => (track.dataset.mouseDownAt = e.clientX);

  const handleOnUp = () => {
    track.dataset.mouseDownAt = "0";
    track.dataset.prevPercentage = track.dataset.percentage;
  };

  const handleOnMove = (e) => {
    if (track.dataset.mouseDownAt === "0") return;

    const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
      maxDelta = window.innerWidth / 2;

    const percentage = (mouseDelta / maxDelta) * -100,
      nextPercentageUnconstrained =
        parseFloat(track.dataset.prevPercentage) + percentage,
      nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);

    track.dataset.percentage = nextPercentage;

    track.animate(
      {
        transform: `translate(${nextPercentage}%, -50%)`,
      },
      { duration: 1200, fill: "forwards" }
    );

    for (const image of track.getElementsByClassName("image")) {
      image.animate(
        {
          objectPosition: `${100 + nextPercentage}% center`,
        },
        { duration: 1200, fill: "forwards" }
      );
    }
  };

  window.onmousedown = (e) => handleOnDown(e);

  window.ontouchstart = (e) => handleOnDown(e.touches[0]);

  window.onmouseup = (e) => handleOnUp(e);

  window.ontouchend = (e) => handleOnUp(e.touches[0]);

  window.onmousemove = (e) => handleOnMove(e);

  window.ontouchmove = (e) => handleOnMove(e.touches[0]);

  if (!galleryData) return <p>Loading...</p>;

  return (
    <div className="window">
      <div className="gallery" data-mouse-down-at="0" data-prev-percentage="0">
        {galleryData.map((images) => {
          return (
            <Link
              key={images.name}
              to="/menu"
              onClick={() => {
                toast.info(`${images.type}: ${images.name}`, {
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
              <img
                src={images.image}
                alt=""
                className="gallery__image"
                draggable="false"
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default GalleryPage;
