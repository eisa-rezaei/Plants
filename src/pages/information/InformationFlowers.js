import React from "react";
import { AiFillExclamationCircle } from "react-icons/ai";
import { GiDroplets } from "react-icons/gi";
import flower from "../../images/flower.jpg";
import "./InformationFlowers.css";

const InformationFlowers = () => {
  return (
    <div className="information-page">
      <div className="info-prof">
        <img src={flower} alt="flower" />
        <div className="info-prof-info">
          <span>
            <AiFillExclamationCircle />
            <GiDroplets />
          </span>
          <p> needs water</p>
        </div>
      </div>
      <div className="info-icons">
        <div className="info-icons-item">
          <span>🌡</span>
          <p>15'C</p>
        </div>
        <div className="info-icons-item">
          <span>☀️</span>
          <p>Nice</p>
        </div>
      </div>
      <div className="info-discription">
        <h3>discription</h3>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. At modi
          earum possimus! Eligendi dolorum dolor totam ducimus labore aliquam
          deleniti cupiditate tempore!
        </p>
      </div>
      <div className="info-photos-bar">
        <h4>photos</h4> <a href="/">see all</a>
      </div>
      <div className="info-image-container">
        <img src={flower} alt="flower2" />
      </div>
    </div>
  );
};

export default InformationFlowers;
