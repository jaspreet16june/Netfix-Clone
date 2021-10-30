import React from "react";
import "./css/nav.css";
import { useState, useEffect } from "react";

function Nav() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <img
        className="nav_logo"
        src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg"
        alt="Netflix Logo"
      />
      <img
        className="nav_avatar"
        src="https://www.w3schools.com/howto/img_avatar.png"
        alt="User Logo"
      />
    </div>
  );
}

export default Nav;
