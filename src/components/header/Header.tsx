import "./Header.css";

import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  const currentPage = (() => {
    switch (location.pathname) {
      case "/document":
        return "문서 작업";
      case "/issue":
        return "논점 생성";
      case "/pullrequest":
        return "검토 요청";
      case "/tool":
        return "자동화 툴";
      default:
        return "";
    }
  })();

  return (
    <header className="border-b border-gray-200 bg-gray-100">
      <div className="container mx-10 my-auto flex items-start justify-between pt-5">
        {/* Left Side - Branding */}
        <div className="flex flex-col justify-center align-middle">
          <div className="mb-4 flex flex-row">
            <img src="./images/logo.svg" alt="logo" className="mr-3 w-7" />
            <Link to="/" className="flex items-center">
              <span className="text-xl font-semibold">OPTIMA</span>
            </Link>
          </div>

          {/* Navigation Links */}
          <nav>
            <ul className="flex space-x-4">
              {[
                ["문서 작업", "document"],
                ["논점 생성", "issue"],
                ["검토 요청", "pullrequest"],
                ["자동화 툴", "tool"],
              ].map((text) => (
                <Link to={text[1]} key={text[1]}>
                  <li
                    key={text[0]}
                    className={`nav-item ${currentPage === text[0] ? "active" : ""} flex flex-row items-center pb-2 pl-2`}
                  >
                    <img
                      src={`./images/${text[1]}_icon.svg`}
                      alt="icon"
                      className="mr-1 w-5"
                    />
                    <p className="rounded-md py-2 pl-1 pr-3 text-sm font-medium text-gray-700 hover:text-gray-900">
                      {text[0]}
                    </p>
                  </li>
                </Link>
              ))}
            </ul>
          </nav>
        </div>

        {/* Placeholder for other header elements */}
        <div>
          {/* Placeholder elements like search bar, profile icon, etc. */}
        </div>
      </div>
    </header>
  );
};

export default Header;
