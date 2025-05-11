/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";

import { Button } from "@heroui/react";

const Card = ({ artifact }) => {
  const navigate = useNavigate();

  const handleDetails = (id) => {
    navigate(`/view-artifact-details/${id}`);
  };

  const {
    artifactName,
    artifactImage,
    historicalContext,
    createdby,
    react,
    _id,
  } = artifact;

  return (
    <div className="w-full max-w-sm bg-[#3E3C3B] text-[#E0D9D1] rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 dark:bg-[#2C2A29] dark:text-[#E0D9D1]">
      {/* Image */}
      <img
        src={artifactImage}
        alt={artifactName}
        className="h-48 w-full object-cover"
      />

      <div className="p-4 space-y-3">
        {/* Title */}
        <h2 className="text-lg font-semibold truncate text-[#E0D9D1] dark:text-[#D3C6A1]">
          {artifactName}
        </h2>

        {/* Short Description */}
        <p className="text-sm text-[#cfbaa2] leading-snug line-clamp-2 dark:text-[#B0A59A]">
          {historicalContext
            ? historicalContext.split(" ").slice(0, 12).join(" ") + "..."
            : "No historical context available."}
        </p>

        {/* Creator Info */}
        <div className="flex items-center gap-3 pt-1">
          <img
            src={
              createdby?.photoURL ||
              "https://source.unsplash.com/100x100/?portrait"
            }
            alt={createdby?.displayName || "User"}
            className="w-8 h-8 rounded-full object-cover"
          />
          <span className="text-sm text-[#E0D9D1] dark:text-[#D3C6A1]">
            {createdby?.displayName || "Unknown User"}
          </span>
        </div>

        {/* Footer: Likes + Button */}
        <div className="flex items-center justify-between pt-2">
          <div className="flex items-center gap-1 text-[#A9927D] text-sm dark:text-[#D3C6A1]">
            <FaRegHeart className="w-4 h-4" />
            <span>{react || 0}</span>
          </div>
          <Button
            onClick={() => handleDetails(_id)}
            className="px-3 py-1.5 text-sm rounded-md bg-[#5A5655] dark:bg-[#4E4A48] hover:bg-[#7B5A36] dark:hover:bg-[#5A4A47] transition-colors"
          >
            View Details
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Card;
