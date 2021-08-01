import React from "react";
import { AiFillExclamationCircle } from "react-icons/ai";
import { GiPalmTree } from "react-icons/gi";
import { RiPlantLine, RiTempHotFill } from "react-icons/ri";
import "./AddFlower.css";
import listFlower1 from "../../images/list-image1.jpg";
import listFlower2 from "../../images/list-image2.jpg";

const AddFlower = () => {
  return (
    <div className="addflower-page">
      <header className="head-of-addflower">
        <span>
          <RiPlantLine />
          <h2> planzy</h2>
        </span>
        <p>you have an amazing plant </p>
      </header>
      <div className="addflower-icons">
        <div className="addflower-icons-item">
          <span>
            <RiTempHotFill />
          </span>
          <p>23'C</p>
        </div>
        <div className="addflower-icons-item">
          <span>
            <GiPalmTree />
          </span>
          <p>621.5</p>
        </div>
      </div>
      <div className="addflower-div-img">
        <h4>alcana</h4>
        <p>needs water</p>
        <span>
          <AiFillExclamationCircle />
        </span>
      </div>
      <section className="addflower-img-holder">
        <article className="addflower-img-item">
          <img src={listFlower1} alt="flower1" />
          <span>
            <h3>alcena</h3>
            <p>needs water</p>
          </span>
        </article>
        <article className="addflower-img-item">
          <img src={listFlower2} alt="flower2" />
          <span>
            <h3>flower </h3>
            <p>needs water</p>
          </span>
        </article>
      </section>
    </div>
  );
};

export default AddFlower;
