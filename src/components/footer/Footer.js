import React from "react";
import { useToogleContext } from "../../AllContextes/toggle-bg-Context";
import { HiHome } from "react-icons/hi";
import { BsPlus } from "react-icons/bs";
import { AiFillQuestionCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  const { bgColor, AddIsHome, AddIsAdd, AddIsInfo } = useToogleContext();
  const { isHome, isAdd, isInfo } = bgColor;

  return (
    <footer className="footer-page">
      <Link to="/" className={isHome ? `active` : null} onClick={AddIsHome}>
        <HiHome />
      </Link>
      <Link
        to="/addflower"
        className={isAdd ? `active` : null}
        onClick={AddIsAdd}
      >
        <BsPlus />
      </Link>
      <Link
        to="/information"
        className={isInfo ? `active` : null}
        onClick={AddIsInfo}
      >
        <AiFillQuestionCircle />
      </Link>
    </footer>
  );
};

export default Footer;
