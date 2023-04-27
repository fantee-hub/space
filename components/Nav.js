import React from "react";
import navIcon from "../public/assets/nav.svg";

function Nav() {
  return (
    <div className="relative font-con">
      <div className="nav-items absolute flex justify-between items-center w-full py-10">
        <div className="icon-img ml-10">
          <img src={navIcon.src} alt="nav icon" />
        </div>
        <div className="line absolute left-[170px] top-18 mix-blend-normal w-[400px] h-px opacity-25 bg-white z-50"></div>
        <div className="nav-list w-3/5 text-white md:hidden">
          <ul className="flex items-center bg-nav-color backdrop-blur-xs px-5 py-5 tracking-wide justify-center">
            <li className="pr-10 ">
              <span className="font-bold">00</span> HOME
            </li>
            <li className="pr-10">
              <span className="font-bold">01</span> DESTINATION
            </li>
            <li className="pr-10">
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
