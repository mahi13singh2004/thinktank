import React from "react";
import safe from "../assets/safe.jpg";
import { Routes, Route, Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="main">
      <div className="w-full h-24 bg-white flex justify-between px-4 items-center">
        <div className="left">
          <Link to='/'><img
            className="h-24 rounded-full w-auto px-4 py-3 transform hover:scale-110 transition-transform duration-300"
            src={safe}
          /></Link>
        </div>
        <div className="right px-20">
          <ul className="flex gap-8 font-lacquer text-lg">
            <li className="transform hover:scale-110 transition-transform duration-300">
              <Link to="/contact">Contact Us</Link>
            </li>
            <li className="transform hover:scale-110 transition-transform duration-300">
              <Link to="/team">Our Team</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
