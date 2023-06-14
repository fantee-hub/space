import React, { useState } from "react";
import navIcon from "../public/assets/nav.svg";
import hamburger from "../public/assets/hamburger.svg";
import close from "../public/assets/close.svg";
import Link from "next/link";
import { useRouter } from "next/router";

function Nav() {
  const router = useRouter();
  const { pathname } = router;
  console.log(pathname);
  const [toggle, setToggle] = useState(false);

  const handleToggleHandler = () => {
    setToggle(!toggle);
  };
  const closeHandler = () => {
    setToggle(false);
  };
  return (
    <div className="relative font-con">
      <div className="nav-items absolute flex justify-between items-center w-full py-10  sm:p-6">
        <div className="icon-img ml-10 sm:ml-0 ">
          <img src={navIcon.src} alt="nav icon" />
        </div>
        <div className="line absolute left-[170px] top-18 mix-blend-normal w-[400px] h-px opacity-25 bg-white z-50 lg:hidden"></div>
        <div className="nav-list min-w-[60%] text-white md:hidden">
          <ul className="flex items-center  bg-nav-color backdrop-blur-xs px-5 py-5 tracking-wide justify-center">
            <Link href="/">
              <li
                className={`mr-10 lg:py-4 relative ${
                  pathname === "/" ? "nav-active" : ""
                }`}
              >
                <span className="font-bold lg:hidden">00</span> HOME
              </li>
            </Link>
            <Link href="/destination">
              <li
                className={`mr-10 lg:py-4 relative ${
                  pathname === "/destination" ? "nav-active" : ""
                }`}
              >
                <span className="font-bold lg:hidden">01</span> DESTINATION
              </li>
            </Link>
            <Link href="/crew">
              <li
                className={`mr-10 lg:py-4 relative ${
                  pathname === "/crew" ? "nav-active" : ""
                }`}
              >
                <span className="font-bold lg:hidden">02</span> CREW
              </li>
            </Link>
            <Link href="/technology">
              <li
                className={`relative lg:py-4 ${
                  pathname === "/technology" ? "nav-active" : ""
                }`}
              >
                <span className="font-bold lg:hidden">03</span> TECHNOLOGY
              </li>
            </Link>
          </ul>
        </div>
        <div className="mobile-view mdd:hidden">
          <div
            className="hamburger cursor-pointer"
            onClick={handleToggleHandler}
          >
            <img src={hamburger.src} alt="hamburger icon" />
          </div>
          <div
            className={`nav-contents fixed w-[75%] h-screen top-0 right-0 flex flex-col  z-50 bg-nav-color backdrop-blur-xs translate-x-[100%] ${
              toggle ? "active" : ""
            }`}
          >
            <div
              className="close-icon mt-[33px] mr-[26px] mb-[64px] flex justify-end cursor-pointer"
              onClick={closeHandler}
            >
              <img src={close.src} alt="close" />
            </div>
            <ul className=" text-white pl-[32px]">
              <Link href="/">
                <li
                  className={`mr-10 lg:py-4 relative ${
                    pathname === "/" ? "nav-active" : ""
                  }`}
                >
                  <span className="font-bold lg:hidden">00</span> HOME
                </li>
              </Link>
              <Link href="/destination">
                <li
                  className={`mr-10 lg:py-4 relative ${
                    pathname === "/destination" ? "nav-active" : ""
                  }`}
                >
                  <span className="font-bold lg:hidden">01</span> DESTINATION
                </li>
              </Link>
              <Link href="/crew">
                <li
                  className={`mr-10 lg:py-4 relative ${
                    pathname === "/crew" ? "nav-active" : ""
                  }`}
                >
                  <span className="font-bold lg:hidden">02</span> CREW
                </li>
              </Link>
              <Link href="/technology">
                <li
                  className={`relative lg:py-4 ${
                    pathname === "/technology" ? "nav-active" : ""
                  }`}
                >
                  <span className="font-bold lg:hidden">03</span> TECHNOLOGY
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
