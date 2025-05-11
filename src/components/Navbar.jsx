import { useState, useContext, useRef, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/images/logo.png";
import { AuthContext } from "../provider/AuthProvider";
import { Link, NavLink } from "react-router-dom";
import gsap from "gsap";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    if (isMobileMenuOpen) {
      gsap.set(menuRef.current, { display: "block" });
      gsap.fromTo(
        menuRef.current,
        { y: -20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.4, ease: "power2.out" }
      );
    } else {
      gsap.to(menuRef.current, {
        y: -20,
        opacity: 0,
        duration: 0.3,
        ease: "power2.in",
        onComplete: () => gsap.set(menuRef.current, { display: "none" }),
      });
    }
  }, [isMobileMenuOpen]);

  const navLinks = (
    <>
      <li>
        <NavLink to="/" className={({ isActive }) => isActive ? "text-[#D99578] font-semibold" : "text-white"}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/about-us" className={({ isActive }) => isActive ? "text-[#D99578] font-semibold" : "text-white"}>
          About Us
        </NavLink>
      </li>
      <li>
        <NavLink to="/services" className={({ isActive }) => isActive ? "text-[#D99578] font-semibold" : "text-white"}>
          Services
        </NavLink>
      </li>
      <li>
        <NavLink to="/all-artifacts" className={({ isActive }) => isActive ? "text-[#D99578] font-semibold" : "text-white"}>
          All Artifacts
        </NavLink>
      </li>
      <li>
        <NavLink to="/add-artifact" className={({ isActive }) => isActive ? "text-[#D99578] font-semibold" : "text-white"}>
          Add Artifacts
        </NavLink>
      </li>
      {!user && (
        <li className="lg:hidden">
          <Link to="/login" className="block text-white font-medium bg-[#9C6F42] px-4 py-2 rounded hover:bg-[#7B5A36]">
            Login
          </Link>
        </li>
      )}
    </>
  );

  return (
    <header className="sticky top-0 z-50 bg-[#302E2F] shadow-sm">
      <div className="w-[89%] mx-auto flex items-center justify-between py-3">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Logo" className="h-8 w-auto" />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex">
          <ul className="flex gap-10">{navLinks}</ul>
        </nav>

        {/* Auth/User Section */}
        <div className="flex items-center gap-4 relative">
          {!user && (
            <Link to="/login" className="hidden lg:block px-4 py-2 bg-[#9C6F42] text-white rounded hover:bg-[#7B5A36]">
              Login
            </Link>
          )}

          {user && (
            <div className="relative">
              <div onClick={() => setIsUserDropdownOpen(!isUserDropdownOpen)} className="cursor-pointer">
                <img
                  src={user?.photoURL}
                  alt="User"
                  className="h-10 w-10 rounded-full border-2 border-[#9C6F42]"
                  referrerPolicy="no-referrer"
                />
              </div>

              {isUserDropdownOpen && (
                <ul className="absolute right-0 bg-[#403D3D] text-[#D99578] rounded-md mt-3 w-52 shadow p-2 z-50">
                  <li className="text-white text-center font-medium">{user?.displayName}</li>
                  <li className="hover:bg-[#7B5A36] py-2 px-4 rounded-md">
                    <Link to="/my-add-artifact">My Artifacts</Link>
                  </li>
                  <li className="hover:bg-[#7B5A36] py-2 px-4 rounded-md">
                    <Link to="/liked-artifacts">Liked Artifacts</Link>
                  </li>
                  <li className="mt-2">
                    <button
                      onClick={() => {
                        logOut();
                        setIsUserDropdownOpen(false);
                      }}
                      className="w-full bg-[#9C6F42] text-white px-4 py-2 rounded hover:bg-[#7B5A36]"
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              )}
            </div>
          )}

          {/* Mobile Menu Icon */}
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-white text-2xl lg:hidden">
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        ref={menuRef}
        className="lg:hidden bg-[#302E2F] w-full absolute top-full left-0 z-40 overflow-hidden"
        style={{ display: "none" }}
      >
        <ul className="space-y-3 text-center list-none py-4">{navLinks}</ul>
      </div>
    </header>
  );
};

export default Navbar;
