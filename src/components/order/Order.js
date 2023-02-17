import Delete from "../../assets/delete_outline-24px.svg";
import axios from "axios";
import "./Order.scss";

const Order = ({ orderData, setOrderData }) => {
  //Delete Item Data
  const handleDelete = async (details) => {
    try {
      await axios.delete(`http://localhost:8080/order/${details.id}`);
      // Remove the deleted item from the orderData array
      const updatedOrderData = orderData.filter(
        (item) => item.id !== details.id
      );
      // Update the state with the updated orderData array
      setOrderData(updatedOrderData);
    } catch (error) {
      alert(`Error Adding Item: ${error.response.data}`);
    }
  };

  return (
    <section className="order">
      <h2 className="order__title">Your Order</h2>
      <div className="order__band">
        <h4 className="order__band--heading">Type</h4>
        <h4 className="order__band--heading">Dish</h4>
        <h4 className="order__band--heading">Action</h4>
      </div>
      {orderData.map((details) => {
        return (
          <div className="order__card" key={details.id}>
            <h3 className="order__type">{details.type}</h3>
            <div className="order__info">
              <h4 className="order__dish">{details.name}</h4>
              <p className="order__qty">{details.quantity}</p>
            </div>
            <button
              className="order__button"
              onClick={() => handleDelete(details)}
            >
              <img src={Delete} alt="" className="order__button--delete" />
            </button>
          </div>
        );
      })}
    </section>
  );
};

export default Order;
