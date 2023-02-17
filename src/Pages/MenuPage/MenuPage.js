import Header from "../../components/header/Header";
import axios from "axios";
import React, { useState, useEffect } from "react";
import MenuCard from "../../components/menuCard/MenuCard";
import "./MenuPage.scss";
import Footer from "../../components/footer/Footer";

const MenuPage = () => {
  const apiUrl = "http://localhost:8080";
  const [menuData, setMenuData] = useState();

  useEffect(() => {
    //Retrieving MenuPage Data
    const getHomeData = async () => {
      try {
        const res = await axios.get(`${apiUrl}/menu`);
        setMenuData(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    getHomeData();
  }, []);

  if (!menuData) return <p>Loading...</p>;

  return (
    <>
      <Header />
      <section className="menu">
        <div className="menu__header">
          <h1 className="menu__header--title">Menu</h1>
        </div>
        <MenuCard menuData={menuData} />
        <Footer />
      </section>
    </>
  );
};

export default MenuPage;
