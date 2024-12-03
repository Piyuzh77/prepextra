import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex justify-evenly items-center mt-4 shadow-lg p-3 bg-darkBlue">
      {/* Header Navigation */}
      <header>
        <ul className="flex text-base sm:text-lg md:text-xl lg:text-2xl space-x-4 sm:space-x-6">
          <li className="px-3 sm:px-4 group">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `relative inline-block font-semibold ${
                  isActive ? "text-siteYellow" : "text-siteLavender"
                }`
              }
            >
              Problems
              <span
                className={`absolute bottom-0 left-0 w-0 h-[2px] bg-siteYellow transition-all duration-300 ease-out group-hover:w-full`}
              ></span>
            </NavLink>
          </li>
          <li className="px-3 sm:px-4 group">
            <NavLink
              to="/resources"
              className={({ isActive }) =>
                `relative inline-block font-semibold ${
                  isActive ? "text-siteYellow" : "text-siteLavender"
                }`
              }
            >
              Resources
              <span
                className={`absolute bottom-0 left-0 w-0 h-[2px] bg-siteYellow transition-all duration-300 ease-out group-hover:w-full`}
              ></span>
            </NavLink>
          </li>
          <li className="px-3 sm:px-4 group">
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `relative inline-block font-semibold ${
                  isActive ? "text-siteYellow" : "text-siteLavender"
                }`
              }
            >
              About
              <span
                className={`absolute bottom-0 left-0 w-0 h-[2px] bg-siteYellow transition-all duration-300 ease-out group-hover:w-full`}
              ></span>
            </NavLink>
          </li>
        </ul>
      </header>

      {/* Divider */}
      <span className="w-[80vw] bg-siteLavender h-[1px] mt-2"></span>
    </div>
  );
};

export default Header;
