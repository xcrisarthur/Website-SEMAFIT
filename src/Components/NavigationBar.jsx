import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../Image/LogoSema.png";

const NavigationBar = ({ navNalue }) => {
  const navigate = useNavigate();
  return (
    <>
      <header
        aria-label="Site Header"
        id="navbar"
        className="shadow-sm sticky top-0 z-50 "
      >
        <div className="mx-auto max-w-screen-xl p-4 ">
          <div className="flex items-center justify-between gap-4 lg:gap-10">
            <div className="flex lg:w-0 lg:flex-1">
              <h1 className="text-2xl font-medium">S E M A F I T</h1>
            </div>

            <div
              aria-label="Site Nav"
              className="hidden gap-8 text-sm font-medium md:flex"
            >
              <a className="text-gray-500 my-auto">Aspiration Form</a>

              <a
                className="text-gray-500 my-auto"
                onClick={() => navigate("/about")}
              >
                Profile
              </a>
              <a
                className="text-gray-500 my-auto"
                onClick={() => navigate("/")}
              >
                Home
              </a>
              <a
                className="inline-block w-12"
                id="logo"
                onClick={() => navigate("/")}
              >
                <img srcSet={Logo} alt="*Disini logo" />
              </a>
              <a className="text-gray-500 my-auto">Events</a>
              <a className="text-gray-500 my-auto">Merchandise</a>
              <a className="text-gray-500 my-auto">Article</a>
            </div>

            <div className="hidden flex-1 items-center justify-end gap-4 sm:flex">
              <a className="rounded-lg bg-blue-600 px-5 py-2 text-sm font-medium text-white">
                Contact Us
              </a>
            </div>

            <div className="lg:hidden">
              <button
                className="rounded-lg bg-gray-100 p-2 text-gray-600"
                type="button"
              >
                <span className="sr-only">Open menu</span>
                <svg
                  aria-hidden="true"
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 6h16M4 12h16M4 18h16"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default NavigationBar;
