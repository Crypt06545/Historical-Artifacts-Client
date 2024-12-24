import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Card from "../components/Card";
import LoadingSpinner from "../components/Loader";

const FeaturedArtifacts = () => {
  const [artifacts, setArtifacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchArtifacts = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_BASE_URL}/featured-artifacts`
        );

        // Sort artifacts by 'react' count in descending order
        const sortedArtifacts = response.data.sort((a, b) => b.react - a.react);
        setArtifacts(sortedArtifacts);
        setLoading(false);
      } catch (err) {
        setError("Failed to load artifacts",err);
        setLoading(false);
      }
    };

    fetchArtifacts();
  }, []);

  if (loading)
    return (
      <div className="flex justify-center items-center min-h-screen">
        <LoadingSpinner />
      </div>
    );

  if (error) return <div className="text-center text-red-500">{error}</div>;

  if (artifacts.length === 0)
    return (
      <div className="flex justify-center items-center bg-[#1F1D1D] min-h-screen">
        <p className="text-white text-xl">No data found</p>
      </div>
    );

  return (
    <div className="bg-[#1F1D1D] min-h-screen">
      <div className="w-11/12 mx-auto py-10">
        {/* Page Title */}
        <div className="text-center mb-8">
          <h1 className="text-white text-3xl font-bold">
            Featured Artifacts
          </h1>
          
        </div>

        {/* Artifacts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {artifacts.map((artifact) => (
            <Card key={artifact._id} artifact={artifact} />
          ))}
        </div>
        <div className="m-5 text-center">
        <button
            onClick={() => navigate("/all-artifacts")}
            className="text-white transition-colors duration-300 transform bg-[#9C6F42]  lg:w-auto hover:bg-[#7B5A36] focus:outline-none focus:bg-[#7B5A36] px-5 py-2 rounded-lg font-semibold"
          >
            See All
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedArtifacts;
