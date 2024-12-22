/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const Slide = ({ image, text }) => {
  return (
    <div
      className="w-full bg-center bg-cover h-[38rem]"
      style={{
        backgroundImage: `url(${image})`,
        backgroundBlendMode: "overlay", // Adds a dark tone to the image
      }}
    >
      <div className="flex items-center justify-center w-full h-full bg-[#3B2A2B] bg-opacity-30">
        <div className="text-center">
          <h1 className="text-4xl p-3 font-extrabold text-white lg:text-5xl">
            {text}
          </h1>
          <br />
          <p className="text-lg p-5 text-white mt-4 font-medium">
            Step back in time and witness history come alive through our
            carefully curated collection of ancient relics and timeless
            artworks.
          </p>
          <br />
          <Link className="w-full px-5 py-4 mt-4 text-sm font-medium text-white capitalize transition-colors duration-300 transform bg-[#9C6F42] rounded-md lg:w-auto hover:bg-[#7B5A36] focus:outline-none focus:bg-[#7B5A36]">
            Visit Our Gallery & Discover the Past
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Slide;
