import "./AboutUs.scss";

const AboutUs = ({ homeData }) => {
  return (
    <>
      <h2 className="featured__heading">About Us</h2>
      <div className="descriptive">
        <img src={homeData.restaurant} alt="" className="descriptive__image" />
        <p className="descriptive__text">{homeData.info}</p>
      </div>
    </>
  );
};

export default AboutUs;
