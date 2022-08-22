import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-left">
            <div className="header-content">
              <h1>We serve mouth-watering meals</h1>
              <p>
                We pride ourselves in serving our customers the most healthy and
                tasty dishes in the world.
              </p>
              <Link to="/products">Check out our menu</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
