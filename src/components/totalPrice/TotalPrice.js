import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import "./TotalPrice.scss";

const TotalPrice = ({ orderData, setOrderData }) => {
  const navigate = useNavigate();
  const finalPrice = () => {
    let totalPrice = 0;
    for (let i = 0; i < orderData.length; i++) {
      totalPrice += orderData[i].price * orderData[i].quantity;
    }
    return totalPrice.toFixed(2);
  };
  // Delete Cart Data
  const wipeCart = async () => {
    try {
      await axios.delete(`http://localhost:8080/order/`);
      setOrderData([]);
    } catch (error) {
      alert(`Error Deleting Items: ${error.response.data}`);
    }
  };
  const notify = async (dish) => {
    toast.success("Order Has Been Processed :)", {
      position: "bottom-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
    navigate("/");
  };

  return (
    <div className="process">
      <h3 className="process__title">Order Summary</h3>
      <div className="process__card">
        <h5 className="process__text">
          Your Card total is:
          <span className="process__gold">{finalPrice()}$</span>
        </h5>
        <button
          className="process__button"
          onClick={() => {
            wipeCart();
            notify();
          }}
        >
          <span className="process__button--order">Place Order</span>
        </button>
      </div>
    </div>
  );
};

export default TotalPrice;
