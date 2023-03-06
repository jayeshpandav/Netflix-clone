import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Styles/Nav.css";

const Nav = () => {
  const [show, setShow] = useState(false);

  const navigate = useNavigate();

  const transitionNavbar = () => {
    if (window.scrollY > 100) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavbar);
    return () => window.removeEventListener("scroll", transitionNavbar);
  }, []);

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <img
        className="nav_logo"
        src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
        alt=""
        onClick={() => navigate("/")}
      />

      <img
        className="nav_avatar"
        src="https://png.pngtree.com/png-vector/20220817/ourmid/pngtree-cartoon-man-avatar-vector-ilustration-png-image_6111064.png"
        alt=""
        onClick={() => navigate("/profile")}
      />
      <div className="nav_contents"></div>
    </div>
  );
};

export default Nav;
