import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="max_width bg-gray-900 text-white px-3 py-6 border-white border-b">
        <div className="flex justify-between">
          {/* right header */}
          <div>
            <div>
              <Link to="/">
                <h1 className="font-bold text-2xl">
                  Noor <span>Mohammad</span>
                </h1>
              </Link>
            </div>
          </div>
          {/* middle header */}
          <div className="flex items-center">
            <ul className="flex gap-3">
              <Link to="/">
                {" "}
                <li className="link hidden md:inline-flex">Home</li>
              </Link>
              <li className="link hidden lg:inline-flex">About</li>
              <li className="link hidden lg:inline-flex">Bolg</li>
              <li className="link hidden md:inline-flex">Contact</li>
            </ul>
          </div>
          {/* left header */}
          <div className="flex items-center gap-3">
            <Link to="/registration">
              {" "}
              <h5 className="link">Sign Up</h5>
            </Link>
            <h5 className="link">Sign In</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
