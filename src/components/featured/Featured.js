import "./Featured.scss";

const Featured = ({ homeData }) => {
  return (
    <>
      <h2 className="featured__heading">Featured</h2>
      <div className="featured">
        <img
          src={homeData.featured_image}
          alt=""
          className="featured__menu--image"
        />
        <div className="featured__menu">
          <h4 className="featured__menu--ticker">
            Ordered{" "}
            <span className="featured__menu--gold">
              {homeData.featured_time}
            </span>{" "}
            times this week
          </h4>
          <div className="featured__dish">
            <span className="featured__dish--heading">Entrée</span>
            <p className="featured__dish--description">
              {homeData.featured_entree}
            </p>
          </div>
          <div className="featured__dish">
            <span className="featured__dish--heading">Main</span>
            <p className="featured__dish--description">
              {homeData.featured_main}
            </p>
          </div>
          <div className="featured__dish">
            <span className="featured__dish--heading">Drink</span>
            <p className="featured__dish--description">
              {homeData.featured_drink}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Featured;
