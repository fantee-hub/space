import React from "react";
import navIcon from "../public/assets/nav.svg";
import Link from "next/link";
import { useRouter } from "next/router";

function Nav() {
  const router = useRouter();
  const { pathname } = router;
  console.log(pathname);
  return (
    <div className="relative font-con">
      <div className="nav-items absolute flex justify-between items-center w-full py-10">
        <div className="icon-img ml-10">
          <img src={navIcon.src} alt="nav icon" />
        </div>
        <div className="line absolute left-[170px] top-18 mix-blend-normal w-[400px] h-px opacity-25 bg-white z-50"></div>
        <div className="nav-list w-3/5 text-white md:hidden">
          <ul className="flex items-center  bg-nav-color backdrop-blur-xs px-5 py-5 tracking-wide justify-center">
            <Link href="/">
              <li
                className={`mr-10 relative ${
                  pathname === "/" ? "nav-active" : ""
                }`}
              >
                <span className="font-bold">00</span> HOME
              </li>
            </Link>
            <Link href="/destination">
              <li
                className={`mr-10 relative ${
                  pathname === "/destination" ? "nav-active" : ""
                }`}
              >
                <span className="font-bold">01</span> DESTINATION
              </li>
            </Link>
            <Link href="/crew">
              <li
                className={`mr-10 relative ${
                  pathname === "/crew" ? "nav-active" : ""
                }`}
              >
                <span className="font-bold">02</span> CREW
              </li>
            </Link>
            <Link href="/technology">
              <li
                className={`relative ${
                  pathname === "/technology" ? "nav-active" : ""
                }`}
              >
                <span className="font-bold">03</span> TECHNOLOGY
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Nav;
