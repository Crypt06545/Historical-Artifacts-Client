import React, { useState } from "react";
import { FaHeart } from "react-icons/fa"; // Importing the heart icon from react-icons

const ViewArtifact = () => {
  const [liked, setLiked] = useState(false); // State to track if the artifact is liked

  const toggleLike = () => {
    setLiked(!liked); // Toggle the like state when clicked
  };

  return (
    <div className="bg-[#1F1D1D] py-14 min-h-screen flex items-center justify-center">
      <div className="w-full max-w-4xl p-8 space-y-6 rounded-xl bg-[#4A4746] text-[#E0D9D1]">
        <h1 className="text-3xl font-bold text-center text-[#E0D9D1]">
          Artifact Details
        </h1>

        {/* Artifact Image and Name */}
        <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-x-6">
          <div className="w-full sm:w-1/3">
            <img
              src="https://via.placeholder.com/300x400"
              alt="Artifact"
              className="w-full rounded-md shadow-lg"
            />
          </div>
          <div className="w-full sm:w-2/3 space-y-4">
            <h2 className="text-2xl font-bold text-[#D1B38A]">
              Artifact Name: Ancient Sword
            </h2>
            <p className="text-sm text-[#E0D9D1]">
              <strong>Artifact Type:</strong> Weapon
            </p>
            <p className="text-sm text-[#E0D9D1]">
              <strong>Created At:</strong> 500 BC
            </p>
            <p className="text-sm text-[#E0D9D1]">
              <strong>Discovered At:</strong> 1799
            </p>
            <p className="text-sm text-[#E0D9D1]">
              <strong>Discovered By:</strong> Dr. John Smith
            </p>
            <p className="text-sm text-[#E0D9D1]">
              <strong>Present Location:</strong> National Museum, London
            </p>
          </div>
        </div>

        {/* Historical Context */}
        <div className="space-y-1 text-sm">
          <label htmlFor="historicalContext" className="block text-[#E0D9D1]">
            <strong>Historical Context</strong>
          </label>
          <p className="w-full px-4 py-3 rounded-md bg-[#5D5453] text-[#E0D9D1]">
            This sword was crafted during the Iron Age and was used in numerous
            battles. It is believed to have belonged to a high-ranking military
            officer in the ancient kingdom. The sword has intricate carvings,
            believed to represent the owner's personal victories.
          </p>
        </div>

        {/* Artifact Adder Info */}
        <div className="space-y-1 text-sm">
          <label htmlFor="userInfo" className="block text-[#E0D9D1]">
            <strong>Added By</strong>
          </label>
          <input
            type="text"
            name="userInfo"
            id="userInfo"
            value="John Doe (johndoe@example.com)" // Replace with dynamic data
            readOnly
            className="w-full px-4 py-3 rounded-md bg-[#5D5453] text-[#E0D9D1] focus:ring-2 focus:ring-[#A9927D]"
          />
        </div>

        {/* Like Button */}
        <div className="flex justify-center space-x-4">
          <button
            onClick={toggleLike}
            className={`p-3 rounded-full ${liked ? "bg-[#D1B38A]" : "bg-[#5D5453]"} text-[#1F1D1D] hover:bg-[#D1B38A]`}
          >
            <FaHeart className={`w-6 h-6 ${liked ? "text-[#A9927D]" : "text-[#E0D9D1]"}`} />
          </button>
        </div>

        {/* Back Button */}
        <div className="flex justify-center">
          <button className="block w-1/3 p-3 text-center rounded-sm bg-[#A9927D] text-[#1F1D1D] hover:bg-[#D1B38A]">
            Back to Artifacts
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewArtifact;
