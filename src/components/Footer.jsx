import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";
import { FiPhoneCall, FiMail, FiMapPin } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-[#181716] text-gray-100 px-6 md:px-12 py-10">
      <div className="max-w-7xl mx-auto grid gap-10 md:grid-cols-4">
        {/* Logo and About */}
        <div>
          <h1 className="text-2xl font-bold text-[#e6d9c4] flex items-center gap-2">
            <span className="text-4xl font-extrabold">||</span> astoria
          </h1>
          <p className="mt-4 text-sm text-gray-300">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec.
          </p>
          <div className="flex gap-4 mt-4 text-lg text-[#e6d9c4]">
            <FaFacebookF className="cursor-pointer hover:text-white" />
            <FaTwitter className="cursor-pointer hover:text-white" />
            <FaYoutube className="cursor-pointer hover:text-white" />
          </div>
        </div>

        {/* Support */}
        <div>
          <h2 className="text-lg font-semibold text-[#e6d9c4] mb-4">Support</h2>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#">FAQs</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Condition</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>

        {/* Open Hours */}
        <div>
          <h2 className="text-lg font-semibold text-[#e6d9c4] mb-4">Open Hours</h2>
          <ul className="text-sm text-gray-300 space-y-1">
            <li>Mon – Thu : <span className="float-right">9 AM – 7 PM</span></li>
            <li>Friday : <span className="float-right">8 AM – 6 PM</span></li>
            <li>Saturday : <span className="float-right">7 AM – 4 PM</span></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-lg font-semibold text-[#e6d9c4] mb-4">Contact</h2>
          <ul className="text-sm text-gray-300 space-y-2">
            <li className="flex items-center gap-2"><FiPhoneCall /> (22+) 345-567-90</li>
            <li className="flex items-center gap-2"><FiMail /> example@site.com</li>
            <li className="flex items-center gap-2"><FiMapPin /> Art Center, Pekanbaru</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-600 mt-10 pt-6 text-center text-sm text-gray-400">
        © 2024 <span className="text-[#e6d9c4]">Lastoria Template</span> • All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
