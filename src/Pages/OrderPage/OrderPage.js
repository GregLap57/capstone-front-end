import Header from "../../components/header/Header";
import Order from "../../components/order/Order";
import axios from "axios";
import React, { useState, useEffect } from "react";
import TotalPrice from "../../components/totalPrice/TotalPrice";
import Footer from "../../components/footer/Footer";

const OrderPage = () => {
  const apiUrl = "http://localhost:8080";
  const [orderData, setOrderData] = useState();

  useEffect(() => {
    //Retrieving OrderPage Data
    const getOrderData = async () => {
      try {
        const res = await axios.get(`${apiUrl}/order`);
        setOrderData(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    getOrderData();
  }, [orderData]);

  if (!orderData) return <p>Loading...</p>;

  return (
    <>
      <Header />
      <Order orderData={orderData} />
      <TotalPrice orderData={orderData} setOrderData={setOrderData} />
      <Footer />
    </>
  );
};

export default OrderPage;
