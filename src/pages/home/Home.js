import React from "react";
import { Link } from "react-router-dom";
import { useToogleContext } from "../../AllContextes/toggle-bg-Context";
import { FiSearch } from "react-icons/fi";
import { AiFillExclamationCircle, AiOutlineRight } from "react-icons/ai";
import flower from "../../images/flower.jpg";
import listFlower1 from "../../images/list-image1.png";
import listFlower2 from "../../images/list-image2.png";
import "./Home.css";

const Home = () => {
  const { AddIsInfo } = useToogleContext();
  return (
    <div className="home-page">
      <header className="header">
        <Link to="/information" onClick={AddIsInfo}>
          <img src={flower} alt="flower" />
        </Link>
        <span>
          <FiSearch />
        </span>
      </header>
      <div className="home-input">
        <span>☹️</span>
        <p>you missed watering plants</p>
        <AiOutlineRight />
      </div>
      <div className="img-bg-div">
        <h4>alcana</h4>
        <p>needs water</p>
        <span>
          <AiFillExclamationCircle />
        </span>
      </div>
      <div className="hot-flowers">
        <h4>Hot flowers </h4> <a href="/">see all</a>
      </div>
      <div className="home-flowers-list">
        <div className="flowers-image">
          <img src={listFlower1} alt="flower1" key="1" />
          <img src={listFlower2} alt="flower2" key="2" />
        </div>
      </div>
    </div>
  );
};

export default Home;
