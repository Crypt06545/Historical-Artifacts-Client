import { useState, useContext } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/images/logo.png";
import { AuthContext } from "../provider/AuthProvider";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="navbar sticky top-0 z-50 bg-[#302E2F] shadow-sm px-4 mx-auto">
      {/* Logo Section */}
      <div className="flex items-center justify-between w-full lg:w-auto">
        <Link to="/" className="flex items-center gap-2">
          <img className="w-auto h-7" src={logo} alt="Logo" />
        </Link>
        {/* Hamburger Icon for Small Screens */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-white text-2xl lg:hidden"
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Centered Routes */}
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } lg:flex flex-1 justify-center absolute lg:static top-full left-0 w-full bg-[#302E2F] lg:bg-transparent z-10`}
      >
        <ul className="menu menu-vertical lg:menu-horizontal gap-6 px-4 py-2 lg:py-0 text-center">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-[#D99578]" : "text-white"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/jobs"
              className={({ isActive }) =>
                isActive ? "text-[#D99578]" : "text-white"
              }
            >
              All Artifacts
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/add-artifact"
              className={({ isActive }) =>
                isActive ? "text-[#D99578]" : "text-white"
              }
            >
              Add Artifacts
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="btn">
        <ul>
          {!user && (
            <li>
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  isActive ? "text-[#D99578]" : "text-white"
                }
              >
                Login
              </NavLink>
            </li>
          )}
        </ul>
      </div>
      {/* User or Login Section */}
      <div className="hidden lg:flex items-center lg:ml-auto">
        {user && (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar flex items-center"
            >
              <div className="w-10 rounded-full">
                <img
                  referrerPolicy="no-referrer"
                  alt="User Profile"
                  src={user?.photoURL}
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/add-job">Add Job</Link>
              </li>
              <li>
                <Link to="/">My Artifacts</Link>
              </li>
              <li>
                <Link to="/">Liked Artifacts</Link>
              </li>
              <li className="mt-2">
                <button
                  onClick={logOut}
                  className="bg-gray-200 block text-center"
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
