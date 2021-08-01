import React from "react";
import { FiSearch } from "react-icons/fi";
import flower from "../../images/flower.jpg";
import { AiFillExclamationCircle, AiOutlineRight } from "react-icons/ai";
import { RiEmotionUnhappyLine } from "react-icons/ri";
import listFlower1 from "../../images/list-image1.jpg";
import listFlower2 from "../../images/list-image2.jpg";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-page">
      <header className="header">
        <img src={flower} alt="flower" />
        <span>
          <FiSearch />
        </span>
      </header>
      <div className="home-input">
        <span>
          <RiEmotionUnhappyLine />
        </span>
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
        <h4>Hot flowers </h4> <a href="#">see all</a>
      </div>
      <div className="flowers-image">
        <img src={listFlower1} alt="flower1" />
        <img src={listFlower2} alt="flower2" />
      </div>
    </div>
  );
};

export default Home;
