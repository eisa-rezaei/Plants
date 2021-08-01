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
      <Link to="/" className={bgChange.isHome && `active`}>
        <HiHome
          onClick={() =>
            setBgChange({
              isInfo: false,
              isHome: true,
              isAdd: false,
            })
          }
        />
      </Link>
      <Link to="/addflower" className={bgChange.isAdd && `active`}>
        <BsPlus
          onClick={() =>
            setBgChange({
              isInfo: false,
              isHome: false,
              isAdd: true,
            })
          }
        />
      </Link>
      <Link to="/information" className={bgChange.isInfo && `active`}>
        <AiFillQuestionCircle
          onClick={() =>
            setBgChange({
              isInfo: true,
              isHome: false,
              isAdd: false,
            })
          }
        />
      </Link>
    </footer>
  );
};

export default Footer;
