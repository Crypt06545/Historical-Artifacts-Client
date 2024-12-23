import { useState, useEffect, useContext } from "react";
import { FaEdit, FaTrashAlt, FaImage } from "react-icons/fa";
import axios from "axios";
import { AuthContext } from "../provider/AuthProvider";
import LoadingSpinner from "../components/Loader"; // Importing the already existing loader
import { Link } from "react-router-dom";

const MyAddedArtifacts = () => {
  const { user } = useContext(AuthContext); // Access the logged-in user data
  const [artifacts, setArtifacts] = useState([]); // State to store fetched artifacts
  const [loading, setLoading] = useState(true); // State to handle loading
  const [error, setError] = useState(null); // State to handle errors

  // Fetch artifacts when the component mounts
  useEffect(() => {
    const fetchArtifacts = async () => {
      if (user?.email) {
        // Check if user is logged in and has email
        try {
          const response = await axios.get(
            `${import.meta.env.VITE_API_BASE_URL}/my-add-artifact/${user.email}`
          );
          if (response.data.length === 0) {
            setArtifacts([]); // No artifacts found
          } else {
            setArtifacts(response.data); // Set the fetched artifacts to state
          }
          setLoading(false);
        } catch (err) {
          setError("Failed to fetch artifacts.");
          setLoading(false);
        }
      }
    };

    fetchArtifacts();
  }, [user?.email]); // Re-fetch if the email changes

  // Loading state
  if (loading) {
    return <LoadingSpinner />; // Show the existing loader while data is being fetched
  }

  // Error handling
  if (error) {
    return <div>{error}</div>;
  }

  // If no artifacts found
  if (artifacts.length === 0) {
    return <div className="text-center text-[#D1B38A]">No Data Found</div>;
  }

  return (
    <div className="bg-[#1F1D1D] min-h-screen py-10 md:px-6 px-2">
      <div className="overflow-x-auto bg-[#4A4746] p-6 rounded-xl shadow-lg">
        <table className="table w-full text-[#E0D9D1]">
          {/* Table Header */}
          <thead className="text-[#D1B38A]">
            <tr className="border-b-2 border-[#D1B38A]">
              <th className="py-3 px-4">Image</th>
              <th className="py-3 px-4">Name</th>
              <th className="py-3 px-4">Created At</th>
              <th className="py-3 px-4 text-center">Actions</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {artifacts?.map((artifact) => (
              <tr key={artifact._id} className="hover:bg-[#5D5453]">
                <td className="py-3 px-4 text-center">
                  <img
                    src={
                      artifact?.artifactImage ||
                      "https://via.placeholder.com/50x50"
                    }
                    alt={artifact.name}
                    className="rounded-full w-[50px] h-[50px] object-cover"
                  />
                </td>
                <td className="py-3 px-4">{artifact?.artifactName}</td>
                <td className="py-3 px-4">{artifact.createdAt}</td>
                <td className="py-3 px-4 flex justify-center space-x-4">
                  <button className="text-[#D1B38A] hover:text-[#A9927D]">
                    <Link to={`/update-artifact/${artifact?._id}`}>
                      <FaEdit size={20} />
                    </Link>
                  </button>
                  <button className="text-[#D1B38A] hover:text-[#A9927D]">
                    <Link to={`/detete/${artifact?._id}`}>
                      <FaTrashAlt size={20} />
                    </Link>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAddedArtifacts;
