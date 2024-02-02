// import Input from "components/Input";
import React from "react";
import UserDropdown from "components/Dropdown/UserDropdown";
import "bootstrap-icons/font/bootstrap-icons.min.css"

function NavbarComponent({ bgColor, navbarContainerStyles }) {
  return (
    <div>
    <div
      style={{
        display: "flex",
        position: "relative",
        alignItems: "center",
        padding: "0 20px",
        color: "white",
        height: 50,
        backgroundColor: bgColor ? bgColor : "#0284c7",
        borderBottom: "1px solid rgba(0,0,0,0.1)",
        ...navbarContainerStyles,
      }}
    >
      <div className="w-full mx-autp items-center flex justify-between md:flex-nowrap flex-wrap md:px-10 px-4">
      <a
            className="text-white text-sm uppercase hidden lg:inline-block font-semibold"
            href="#pablo"
            onClick={(e) => e.preventDefault()}
          >
            Dashboard
          </a>
          <form className="md:flex hidden flex-row flex-wrap items-center lg:ml-auto mr-3">
            <div className="relative flex w-full flex-wrap items-stretch">
              <span className="z-10 h-full leading-snug font-normal absolute text-center text-blueGray-300 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3">
                <i className="bi bi-search " ></i>
              </span>
              <input
                type="search"
                placeholder="Search here..."
                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:ring w-full pl-10"
              />
            </div>
          </form>
          {/* User */}
          <ul className="flex-col md:flex-row list-none items-center text-black hidden md:flex">
            <UserDropdown />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NavbarComponent;
