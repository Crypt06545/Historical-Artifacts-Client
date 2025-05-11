import { useState, useContext, useRef, useEffect } from "react";
import { FaBars, FaTimes, FaMoon, FaSun } from "react-icons/fa";
import logo from "../assets/images/logo.png";
import { AuthContext } from "../provider/AuthProvider";
import { Link, NavLink } from "react-router-dom";
import gsap from "gsap";
import { ThemeContext } from "../provider/ThemeProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
  const menuRef = useRef(null);

  // GSAP animation - unchanged from your original
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

  // NavLinks - preserved your original structure with dark mode variants
  const navLinks = (
    <>
      <li>
        <NavLink to="/" className={({ isActive }) => isActive ? "text-[#D99578] dark:text-[#E67E22] font-semibold" : "text-white dark:text-gray-300"}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/about-us" className={({ isActive }) => isActive ? "text-[#D99578] dark:text-[#E67E22] font-semibold" : "text-white dark:text-gray-300"}>
          About Us
        </NavLink>
      </li>
      <li>
        <NavLink to="/services" className={({ isActive }) => isActive ? "text-[#D99578] dark:text-[#E67E22] font-semibold" : "text-white dark:text-gray-300"}>
          Services
        </NavLink>
      </li>
      <li>
        <NavLink to="/all-artifacts" className={({ isActive }) => isActive ? "text-[#D99578] dark:text-[#E67E22] font-semibold" : "text-white dark:text-gray-300"}>
          All Artifacts
        </NavLink>
      </li>
      <li>
        <NavLink to="/add-artifact" className={({ isActive }) => isActive ? "text-[#D99578] dark:text-[#E67E22] font-semibold" : "text-white dark:text-gray-300"}>
          Add Artifacts
        </NavLink>
      </li>
      {!user && (
        <li className="lg:hidden">
          <Link to="/login" className="block text-white dark:text-gray-900 font-medium bg-[#9C6F42] dark:bg-[#E67E22] px-4 py-2 rounded hover:bg-[#7B5A36] dark:hover:bg-[#D35400]">
            Login
          </Link>
        </li>
      )}
    </>
  );

  return (
    <header className="sticky top-0 z-50 bg-[#302E2F] dark:bg-[#1A1A1A] shadow-sm dark:shadow-md">
      <div className="w-[89%] mx-auto flex items-center justify-between py-3">
        {/* Logo - unchanged */}
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Logo" className="h-8 w-auto" />
        </Link>

        {/* Desktop Menu - unchanged structure */}
        <nav className="hidden lg:flex">
          <ul className="flex gap-10">{navLinks}</ul>
        </nav>

        {/* Auth/User Section - preserved all original components */}
        <div className="flex items-center gap-4 relative">
          {/* Added Dark Mode Toggle Button */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full text-white dark:text-gray-300 hover:bg-[#7B5A36] dark:hover:bg-[#333333]"
            aria-label="Toggle dark mode"
          >
            {theme === 'light' ? <FaMoon /> : <FaSun />}
          </button>

          {!user && (
            <Link to="/login" className="hidden lg:block px-4 py-2 bg-[#9C6F42] dark:bg-[#E67E22] text-white rounded hover:bg-[#7B5A36] dark:hover:bg-[#D35400]">
              Login
            </Link>
          )}

          {user && (
            <div className="relative">
              <div onClick={() => setIsUserDropdownOpen(!isUserDropdownOpen)} className="cursor-pointer">
                <img
                  src={user?.photoURL}
                  alt="User"
                  className="h-10 w-10 rounded-full border-2 border-[#9C6F42] dark:border-[#E67E22]"
                  referrerPolicy="no-referrer"
                />
              </div>

              {isUserDropdownOpen && (
                <ul className="absolute right-0 bg-[#403D3D] dark:bg-[#2D2D2D] text-[#D99578] dark:text-[#E67E22] rounded-md mt-3 w-52 shadow p-2 z-50">
                  <li className="text-white dark:text-gray-300 text-center font-medium">{user?.displayName}</li>
                  <li className="hover:bg-[#7B5A36] dark:hover:bg-[#333333] py-2 px-4 rounded-md">
                    <Link to="/my-add-artifact">My Artifacts</Link>
                  </li>
                  <li className="hover:bg-[#7B5A36] dark:hover:bg-[#333333] py-2 px-4 rounded-md">
                    <Link to="/liked-artifacts">Liked Artifacts</Link>
                  </li>
                  <li className="mt-2">
                    <button
                      onClick={() => {
                        logOut();
                        setIsUserDropdownOpen(false);
                      }}
                      className="w-full bg-[#9C6F42] dark:bg-[#E67E22] text-white px-4 py-2 rounded hover:bg-[#7B5A36] dark:hover:bg-[#D35400]"
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              )}
            </div>
          )}

          {/* Mobile Menu Icon - unchanged */}
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-white dark:text-gray-300 text-2xl lg:hidden">
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu - unchanged structure */}
      <div
        ref={menuRef}
        className="lg:hidden bg-[#302E2F] dark:bg-[#1A1A1A] w-full absolute top-full left-0 z-40 overflow-hidden"
        style={{ display: "none" }}
      >
        <ul className="space-y-3 text-center list-none py-4">{navLinks}</ul>
      </div>
    </header>
  );
};

export default Navbar;