// import Input from "components/Input";
import React from "react";
import UserDropdown from "components/Dropdown/UserDropdown";
import "bootstrap-icons/font/bootstrap-icons.min.css"
import "./navbarComp.css"
// import { BiMenu } from "react-icons/bi";

function NavbarComponent({ bgColor, navbarContainerStyles }) {
  // const [sidebarVisible, setSidebarVisible] = useState(false);

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
      <div className="w-full mx-autp items-center  flex justify-between  md:px-10 px-4">
      <a
            className="text-white text-sm uppercase sm:hidden md:block  lg:inline-block font-semibold"
            href="#pablo"
            onClick={(e) => e.preventDefault()}
          >
            Dashboard
          </a>
          <form className="flex items-center">
  <div className="relative flex items-stretch">
    <span className="z-10  leading-snug font-normal t-0 text-center text-blueGray-300 absolute bg-transparent  rounded text-base items-center justify-center w-8 pl-1 py-2">
      <i className="bi bi-search"></i>
    </span>
    <input
      type="search"
      placeholder="Search here..."
      className="border-0 px-2 py-2 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm shadow outline-none pl-10"
    />
  </div>

  {/* User */}
  <ul className="flex mr-3 ml-auto">
    <li className="mr-3">
      {/* Assuming UserDropdown is a component that represents the user */}
      <UserDropdown />
    </li>
  </ul>
</form>

        </div>
      </div>
    </div>
  );
}

export default NavbarComponent;
