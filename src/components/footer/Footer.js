import React, { useState } from "react";
import { HiHome } from "react-icons/hi";
import { BsPlus } from "react-icons/bs";
import { AiFillQuestionCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  const [bgChange, setBgChange] = useState({
    isHome: false,
    isAdd: true,
    isInfo: false,
  });
  return (
    <footer className="footer-page">
      <Link
        to="/"
        className={bgChange.isHome && `active`}
        onClick={() =>
          setBgChange({
            isInfo: false,
            isHome: true,
            isAdd: false,
          })
        }
      >
        <HiHome />
      </Link>
      <Link
        to="/addflower"
        className={bgChange.isAdd && `active`}
        onClick={() =>
          setBgChange({
            isInfo: false,
            isHome: false,
            isAdd: true,
          })
        }
      >
        <BsPlus />
      </Link>
      <Link
        to="/information"
        className={bgChange.isInfo && `active`}
        onClick={() =>
          setBgChange({
            isInfo: true,
            isHome: false,
            isAdd: false,
          })
        }
      >
        <AiFillQuestionCircle />
      </Link>
    </footer>
  );
};

export default Footer;
