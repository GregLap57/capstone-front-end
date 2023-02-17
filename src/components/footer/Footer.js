import "./Footer.scss";
import arrow from "../../assets/chevron_right-24px.svg";

const Footer = () => {
  return (
    <div className="footer">
      <img
        src={arrow}
        alt=""
        className="up"
        onClick={() => window.scroll({ top: 0, left: 0, behavior: "smooth" })}
      />
    </div>
  );
};

export default Footer;
