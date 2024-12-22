import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import { HiOutlineMailOpen } from 'react-icons/hi'; // Import the email icon
import footerBg from '../assets/images/footer-bg.jpg';
import footerLogo from '../assets/images/footer-logo.png';

const Footer = () => {
  return (
    <footer
      className="w-full h-[40vh] bg-cover bg-center bg-no-repeat flex flex-col items-center justify-between text-white py-6"
      style={{
        backgroundImage: `url(${footerBg})`, // Background image path
      }}
    >
      {/* Logo Section */}
      <div className="flex justify-center items-center mb-4">
        <img
          src={footerLogo}
          alt="Logo"
          className="w-20 h-auto mb-2" // Adjusted spacing for the logo
        />
      </div>

      {/* Email Subscription */}
      <div className="flex items-center w-[80%] max-w-md bg-white rounded-md overflow-hidden shadow-lg mt-4">
        <div className="flex items-center justify-center w-12 h-12 bg-[#9C6F42]">
          <HiOutlineMailOpen className="w-6 h-6 text-white" /> {/* Email Icon */}
        </div>
        <input
          type="email"
          placeholder="Enter Email Address..."
          className="flex-1 px-4 py-2 text-gray-700 outline-none placeholder:text-gray-500"
        />
        <button className="flex items-center justify-center w-12 h-12 bg-[#9C6F42] hover:bg-[#7B5A36]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 12H6.75m10.5 0l-4.5 4.5m4.5-4.5l-4.5-4.5"
            />
          </svg>
        </button>
      </div>

      {/* Social Icons */}
      <div className="flex mt-4 space-x-4">
        <FaFacebookF className="w-6 h-6 cursor-pointer hover:text-[#7B5A36]" />
        <FaTwitter className="w-6 h-6 cursor-pointer hover:text-[#7B5A36]" />
        <FaInstagram className="w-6 h-6 cursor-pointer hover:text-[#7B5A36]" />
        <FaYoutube className="w-6 h-6 cursor-pointer hover:text-[#7B5A36]" />
      </div>

      {/* Footer Bottom */}
      <p className="mt-4 text-sm text-center text-gray-400">
        Copyrights © 2024 Crypt0. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
