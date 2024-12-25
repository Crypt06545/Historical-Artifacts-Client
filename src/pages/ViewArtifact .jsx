import { useContext, useEffect, useState } from "react";
import { FaHeart, FaRegCommentAlt } from "react-icons/fa";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import LoadingSpinner from "../components/Loader";
import CommentModal from "../components/CommentModal"; // Import CommentModal
import { AuthContext } from "../provider/AuthProvider";
const ViewArtifact = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const [artifact, setArtifact] = useState(null);
  const [liked, setLiked] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isCommentModalOpen, setIsCommentModalOpen] = useState(false); // State for modal visibility

  // Fetch the artifact details on component mount
  useEffect(() => {
    const fetchArtifactDetails = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_BASE_URL}/view-artifact-details/${id}`
        );
        setArtifact(response.data);
        setLiked(response.data.isLiked);
        setLoading(false);
      } catch (err) {
        setError("Failed to load artifact details", err);
        setLoading(false);
      }
    };

    fetchArtifactDetails();
  }, [id]);

  const toggleLike = async () => {
    const newLikeState = !liked; // Toggle the like state
    setLiked(newLikeState); // Update local state

    // Get user info from AuthContext
    const userEmail = user?.email;

    try {
      const response = await axios.patch(
        `${import.meta.env.VITE_API_BASE_URL}/update-artifact-like/${id}`,
        { userEmail, liked: newLikeState } // Send only userEmail and liked
      );

      // If the like was successfully toggled, update the react count
      if (response.data.success) {
        toast.success(response.data.message);

        // Update the artifact's react count based on the new like state
        setArtifact((prevArtifact) => ({
          ...prevArtifact,
          react: prevArtifact.react + (newLikeState ? 1 : -1),
        }));
      } else {
        toast.error(response.data.message);
      }
    } catch (err) {
      toast.error("Failed to toggle like");
    }
  };

  const openCommentModal = () => {
    setIsCommentModalOpen(true); // Open the comment modal
  };

  const closeCommentModal = () => {
    setIsCommentModalOpen(false); // Close the comment modal
  };

  // Render loading state using LoadingSpinner or error message
  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <div>{error}</div>;
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

        {/* Like and Comment Count Section */}
        <div className="flex justify-center space-x-4 items-center">
          {/* React Count */}
          <div className="relative flex items-center justify-center">
            <span className="absolute -top-3 -right-2 text-xs sm:text-xs font-semibold rounded-full bg-[#D1B38A] text-[#1F1D1D] px-2 py-1">
              {artifact?.react || 0} {/* Default to 0 if no react */}
            </span>
            <button
              onClick={toggleLike}
              className={`p-2 rounded-full ${
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

          {/* Comment Count */}
          <div className="relative flex items-center justify-center">
            <span className="absolute  -top-3 -right-2 text-xs sm:text-xs font-semibold rounded-full bg-[#D1B38A] text-[#1F1D1D] px-2 py-1">
              {artifact?.commentsCount || 0} {/* Default to 0 if no comments */}
            </span>
            <button
              onClick={openCommentModal}
              className="p-2 rounded-full bg-[#5D5453] text-[#1F1D1D] hover:bg-[#D1B38A]"
            >
              <FaRegCommentAlt className="w-6 h-6 text-[#E0D9D1]" />
            </button>
          </div>
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

      {/* Comment Modal */}
      {isCommentModalOpen && (
        <CommentModal artifactId={id} closeModal={closeCommentModal} />
      )}
    </div>
  );
};

export default ViewArtifact;
