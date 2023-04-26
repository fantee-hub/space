import React from "react";
import navIcon from "../public/assets/nav.svg";

function Nav() {
  return (
    <div className="relative ">
      <div className="nav-items absolute flex justify-between w-full">
        <div className="icon-img">
          <img src={navIcon.src} alt="nav icon" />
        </div>
        <div className="nav-list">
          <ul className="flex">
            <li>00 Home</li>
            <li>01 Destination</li>
            <li>02 Crew</li>
            <li>03 Technology</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Nav;
