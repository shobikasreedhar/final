import React from "react";
import { Link } from "react-router-dom";

import "./Navcardrow1.css";

import iteam1 from "./images/Screenshot 2024-09-08 124348.png";
import iteam3 from "./images/Screenshot 2024-09-08 125125.png";
import iteam4 from "./images/Screenshot 2024-09-08 124548.png";
import iteam5 from "./images/r1p4.jpg";
import iteam6 from "./images/r2p1.jpg";

import iteam7 from "./images/r2p2.jpg";
import iteam8 from "./images/Screenshot 2024-09-08 125257.png";
import iteam9 from "./images/r2p4.jpg";

function Navcardrow1() {
  return (
    <>
      <div className="home__nav__row1 first_navcard_row">
        <div className="product-cards">
          <h3 className="product-heading">adults</h3>

          <div className="product-image" style={{ paddingTop: "30px" }}>
            <img
              src={iteam1}
              style={{ height: "40%", width: "80%" }}
              alt="Error"
            />
            
          </div>

          <p className="about">See More</p>
        </div>

        <div className="product-cards">
          <h3 className="product-heading">maternal</h3>
          <div className="product-image">
            <img src={iteam3} alt="error" />
          </div>

          <p className="about">Shop Now</p>
        </div>

        <div className="product-cards">
          <h3 className="product-heading">kids</h3>
          <div className="product-image">
            <img src={iteam4} alt="error" />
          </div>

          <p className="about">Shop Now</p>
        </div>

        <div className="product-cards last">
          <h3 className="product-heading">Sign in for the best experience</h3>
          <Link to="/login">
            <button type="submit" className="btn">
              Sign In Securely{" "}
            </button>
          </Link>

          <div className="product-image">
            <img
              src={iteam5}
              style={{ height: "78%", width: "100%" }}
              alt="Error"
            />
          </div>
        </div>
      </div>
      <div className="home__nav__row2">
        <div className="product-cards">
          <h3 className="product-heading">fitness</h3>
          <div className="product-image">
            <img src={iteam6} alt="error" />
          </div>

          <p className="about">Explore Now</p>
        </div>

        <div className="product-cards">
          <h3 className="product-heading">Beauty </h3>
          <div className="product-image">
            <img src={iteam7} alt="error" />
          </div>

          <p className="about">Shop Now</p>
        </div>

        <div className="product-cards">
          <h3 className="product-heading">pets</h3>
          <div className="product-image">
            <img src={iteam8} alt="error" />
          </div>

          <p className="about">Shop Now</p>
        </div>

        <div className="product-cards ">
          <h4 className="product-heading">Easy returns</h4>

          <div className="product-image">
            <img src={iteam9} alt="Error" />
          </div>
          <div>
            <p className="about">Learn More</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navcardrow1;
