import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-gray-600 flex justify-between items-center text-white h-12">
      <div className="log font-bold">Portfolio</div>
      <ul>
        <li>
          <a href="#" className="mx-1.5 hover:font-bold ">
            Home
          </a>
          <a href="#" className="mx-1.5 hover:font-bold">
            Home
          </a>
          <a href="#" className="mx-1.5 hover:font-bold">
            Home
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
