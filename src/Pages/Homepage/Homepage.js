import axios from "axios";
import React, { useState, useEffect } from "react";
import Featured from "../../components/featured/Featured";
import Header from "../../components/header/Header";
import Hero from "../../components/hero/Hero";
import AboutUs from "../../components/aboutUs/AboutUs";
import Footer from "../../components/footer/Footer";
import Images from "../../components/imageSection/ImageSection";

const HomePage = () => {
  const apiUrl = "http://localhost:8080";
  const [homeData, setHomeData] = useState();
  const [galleryData, setGalleryData] = useState();

  useEffect(() => {
    //Retrieving HomePage Data
    const getHomeData = async () => {
      try {
        const res = await axios.get(`${apiUrl}/home`);
        setHomeData(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    getHomeData();
  }, []);

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

  if (!homeData || !galleryData) return <p>Loading...</p>;

  return (
    <>
      <Header />
      <Hero homeData={homeData} />
      <Featured homeData={homeData} />
      <Images galleryData={galleryData} />
      <AboutUs homeData={homeData} />
      <Footer />
    </>
  );
};

export default HomePage;
