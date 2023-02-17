import "./MenuCard.scss";
import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";

const MenuCard = ({ menuData }) => {
  const entree = menuData[0];
  const main = menuData[1];
  const drink = menuData[2];

  const [orderList, setOrderList] = useState([]);

  const addOrder = async (dish) => {
    const orderItem = orderList.find((item) => item.id === dish.id);
    if (orderItem) {
      const newOrderList = orderList.map((item) =>
        item.id === dish.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setOrderList(newOrderList);

      const addItem = {
        id: dish.id,
        type: dish.type,
        name: dish.name,
        price: dish.price,
        description: dish.description,
        quantity: orderItem.quantity + 1,
      };
      try {
        await axios.post(`http://localhost:8080/order`, addItem);
      } catch (error) {
        alert(`Error Adding Item: ${error.response.data}`);
      }
    } else {
      const newOrderItem = {
        id: dish.id,
        type: dish.type,
        name: dish.name,
        price: dish.price,
        description: dish.description,
        quantity: 1,
      };
      const newOrderList = [...orderList, newOrderItem];
      setOrderList(newOrderList);
      try {
        await axios.post(`http://localhost:8080/order`, newOrderItem);
      } catch (error) {
        alert(`Error Adding Item: ${error.response.data}`);
      }
    }
    toast.success("Item Has Been Added To Order", {
      position: "bottom-left",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  return (
    <>
      <div className="menu__list">
        <div className="order__band">
          <h2 className="menu__list--title">Entrée</h2>
        </div>
        {entree.map((dish) => {
          return (
            <section className="menu__item" key={dish.id}>
              <div className="menu__item--header">
                <h4 className="menu__item--name">{dish.name}</h4>
                <span className="menu__item--price">{dish.price}</span>
              </div>
              <p className="menu__item--description">{dish.description}</p>
              <button className="menu__button" onClick={() => addOrder(dish)}>
                <span className="menu__button--text">Add</span>
              </button>
            </section>
          );
        })}
      </div>
      <div className="menu__list">
        <div className="order__band">
          <h2 className="menu__list--title">Main</h2>
        </div>
        {main.map((dish) => {
          return (
            <section className="menu__item" key={dish.id}>
              <div className="menu__item--header">
                <h4 className="menu__item--name">{dish.name}</h4>
                <span className="menu__item--price">{dish.price}</span>
              </div>
              <p className="menu__item--description">{dish.description}</p>
              <button
                className="menu__button"
                onClick={() => {
                  addOrder(dish);
                }}
              >
                <span className="menu__button--text">Add</span>
              </button>
            </section>
          );
        })}
      </div>
      <div className="menu__list">
        <div className="order__band">
          <h2 className="menu__list--title">Drinks</h2>
        </div>
        {drink.map((dish) => {
          return (
            <section className="menu__item" key={dish.id}>
              <div className="menu__item--header">
                <h4 className="menu__item--name">{dish.name}</h4>
                <span className="menu__item--price">{dish.price}</span>
              </div>
              <p className="menu__item--description">{dish.description}</p>
              <button className="menu__button" onClick={() => addOrder(dish)}>
                <span className="menu__button--text">Add</span>
              </button>
            </section>
          );
        })}
      </div>
    </>
  );
};

export default MenuCard;
