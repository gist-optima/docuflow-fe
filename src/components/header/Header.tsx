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
    <header className="bg-gray-100 border-b border-gray-200">
      <div className="container my-auto mx-10 flex justify-between items-start pt-5">
        {/* Left Side - Branding */}
        <div className="flex flex-col justify-center align-middle">
          <div className="flex flex-row mb-4">
            <img src="./logo.svg" alt="logo" className="w-7 mr-3" />
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
                <li
                  key={text[0]}
                  className={`nav-item ${currentPage === text[0] ? "active" : ""} pb-2`}
                >
                  <Link
                    to={text[1]}
                    className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    {text[0]}
                  </Link>
                </li>
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
