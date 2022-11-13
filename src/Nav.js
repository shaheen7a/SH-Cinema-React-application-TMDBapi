import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);

  const history = useNavigate();

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <div className="nav__contents">
        <img
        onClick={() => history("/")}
          className="nav__logo"
          src="https://i.imgur.com/y5dxaQM.png"
          alt=""
        />
        <img
          onClick={() => history("/profile")}
          className="nav__avatar"
          src="https://www.sg-sohren.de/system/html/profilbild_avatar-7ebc5b26.jpg"
          alt=""
        />
      </div>
    </div>
  );
}

export default Nav;
