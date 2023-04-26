import React from "react";
import navIcon from "../public/assets/nav.svg";

function Nav() {
  return (
    <div className="relative font-con">
      <div className="nav-items absolute flex justify-between w-full py-10">
        <div className="icon-img ml-10">
          <img src={navIcon.src} alt="nav icon" />
        </div>
        <div className="nav-list  text-white">
          <ul className="flex items-center bg-nav-color backdrop-blur-xs px-5 py-5 tracking-wide">
            <li className="pr-7">
              <span className="font-bold">00</span> HOME
            </li>
            <li className="pr-7">
              <span className="font-bold">01</span> DESTINATION
            </li>
            <li className="pr-7">
              <span className="font-bold">02</span> CREW
            </li>
            <li>
              <span className="font-bold">03</span> TECHNOLOGY
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Nav;
