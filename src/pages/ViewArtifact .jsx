import { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa"; // Importing the heart icon from react-icons
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import LoadingSpinner from "../components/Loader";

const ViewArtifact = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [artifact, setArtifact] = useState(null);
  const [liked, setLiked] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch the artifact details on component mount
  useEffect(() => {
    const fetchArtifactDetails = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_BASE_URL}/view-artifact-details/${id}`
        );
        console.log(response.data);
        setArtifact(response.data);
        // Set initial like state based on the artifact data
        setLiked(response.data.isLiked); // Set liked based on artifact's isLiked
        setLoading(false);
      } catch (err) {
        setError("Failed to load artifact details");
        setLoading(false);
      }
    };

    fetchArtifactDetails();
  }, [id]); // Re-run the effect when the ID changes

  const toggleLike = async () => {
    const newLikeState = !liked; // Toggle the like state
    setLiked(newLikeState); // Update local state

    try {
      await axios.patch(
        `${import.meta.env.VITE_API_BASE_URL}/update-artifact-like/${id}`,
        { isLiked: newLikeState }
      );
      toast.success(
        newLikeState ? "You liked this artifact." : "You unliked this artifact."
      );
    } catch (error) {
      toast.error("Error updating like status. Please try again.");
      console.error("Error updating like status:", error);
    }
  };

  // Render loading state using LoadingSpinner or error message
  if (loading) {
    return <LoadingSpinner />; // Show the loading spinner while data is being fetched
  }

  if (error) {
    return <div>{error}</div>; // Show error message if there is an error
  }

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
              src={artifact?.artifactImage}
              alt="Artifact"
              className="w-full rounded-md shadow-lg"
            />
          </div>
          <div className="w-full sm:w-2/3 space-y-4">
            <h2 className="text-2xl font-bold text-[#D1B38A]">
              Artifact Name: {artifact?.artifactName}
            </h2>
            <p className="text-sm text-[#E0D9D1]">
              <strong>Artifact Type:</strong> {artifact?.artifactType}
            </p>
            <p className="text-sm text-[#E0D9D1]">
              <strong>Created At:</strong> {artifact?.createdAt}
            </p>
            <p className="text-sm text-[#E0D9D1]">
              <strong>Discovered At:</strong> {artifact?.discoveredAt}
            </p>
            <p className="text-sm text-[#E0D9D1]">
              <strong>Discovered By:</strong> {artifact?.discoveredBy}
            </p>
            <p className="text-sm text-[#E0D9D1]">
              <strong>Present Location:</strong> {artifact?.presentLocation}
            </p>
          </div>
        </div>

        {/* Historical Context */}
        <div className="space-y-1 text-sm">
          <label htmlFor="historicalContext" className="block text-[#E0D9D1]">
            <strong>Historical Context</strong>
          </label>
          <p className="w-full px-4 py-3 rounded-md bg-[#5D5453] text-[#E0D9D1]">
            {artifact?.historicalContext}
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
            defaultValue={artifact?.createdby?.email} // Replace with dynamic data
            readOnly
            className="w-full px-4 py-3 rounded-md bg-[#5D5453] text-[#E0D9D1] focus:ring-2 focus:ring-[#A9927D]"
          />
        </div>

        {/* Like Button */}
        <div className="flex justify-center space-x-4">
          <button
            onClick={toggleLike}
            className={`p-3 rounded-full ${
              liked ? "bg-[#D1B38A]" : "bg-[#5D5453]"
            } text-[#1F1D1D] hover:bg-[#D1B38A]`}
          >
            <FaHeart
              className={`w-6 h-6 ${
                liked ? "text-[#A9927D]" : "text-[#E0D9D1]"
              }`}
            />
          </button>
        </div>

        {/* Back Button */}
        <div className="flex justify-center">
          <button
            onClick={() => navigate("/all-artifacts")}
            className="block w-1/3 p-3 text-center rounded-sm bg-[#A9927D] text-[#1F1D1D] hover:bg-[#D1B38A]"
          >
            Back to Artifacts
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewArtifact;
