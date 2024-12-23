/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";

const Card = ({ artifact }) => {
  const navigate = useNavigate();
  // console.log(artifact);


  const handleDetails = (id) => {
    navigate(`/view-artifact-details/${id}`);
  };

  const {
    artifactName,
    artifactImage,
    historicalContext,
    // userInfo,
    createdby,
    react,
    _id
  } = artifact;

  return (
    <div>
      <div className="flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md bg-[#4A4746] text-[#E0D9D1]">
        {/* User Info */}
        <div className="flex space-x-4">
          <img
            alt={createdby?.displayName || "User"}
            src={
              createdby?.photoURL ||
              "https://source.unsplash.com/100x100/?portrait"
            }
            className="object-cover w-12 h-12 rounded-full shadow"
          />
          <div className="flex flex-col space-y-1">
            <a
              rel="noopener noreferrer"
              href="#"
              className="text-sm font-semibold text-[#E0D9D1]"
            >
              {createdby?.displayName || "Unknown User"}
            </a>
            {/* <span className="text-xs text-gray-400">
              {userInfo?.time || "Some time ago"}
            </span> */}
          </div>
        </div>

        {/* Artifact Image & Details */}
        <div>
          <img
            src={
              artifactImage ||
              "https://source.unsplash.com/random/100x100/?artifact"
            }
            alt={artifactName || "Artifact"}
            className="object-cover w-full mb-4 h-60 sm:h-96"
          />
          <h2 className="mb-1 text-xl font-semibold text-[#E0D9D1]">
            {artifactName || "Artifact Name"}
          </h2>
          <p className="text-sm text-[#cfbaa2]">
            {historicalContext ||
              "No historical context available for this artifact."}
          </p>
        </div>

        {/* Footer Section */}
        <div className="flex flex-wrap justify-between">
          <div className="flex space-x-2 text-sm text-gray-400">
            <div className="flex justify-center items-center gap-2">
              <FaRegHeart className="w-4 h-full fill-current text-[#A9927D]" />
              <span className="text-[#A9927D]">{react}</span>
            </div>
          </div>
          <button onClick={() => handleDetails(_id)} className="px-3 py-2 border rounded-md bg-[#393738] hover:bg-[#D99578]">
              View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
