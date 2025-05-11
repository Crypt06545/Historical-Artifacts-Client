import { useState, useEffect } from "react";
import axios from "axios";
import Card from "../components/Card";
import LoadingSpinner from "../components/Loader";
import { Helmet } from "react-helmet-async";

const AllArtifacts = () => {
  const [artifacts, setArtifacts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Function to fetch all artifacts
  const fetchAllArtifacts = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_BASE_URL}/all-artifacts`
      );
      setArtifacts(response.data);
    } catch (err) {
      setError("Failed to load artifacts");
    } finally {
      setLoading(false);
    }
  };

  // Function to fetch artifacts based on search
  const fetchArtifactsBySearch = async (query = "") => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_BASE_URL}/search-artifacts`,
        {
          params: { name: query },
          // withCredentials: true,
        }
      );
      setArtifacts(response.data);
    } catch (err) {
      setError("Failed to search artifacts");
    } finally {
      setLoading(false);
    }
  };

  // Fetch all artifacts on initial render
  useEffect(() => {
    fetchAllArtifacts();
  }, []);

  // Handle search
  const handleSearch = () => {
    fetchArtifactsBySearch(searchQuery);
  };

  if (loading)
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Helmet>
          <title>EGYPT - All Artifacts</title>
        </Helmet>
        <LoadingSpinner />
      </div>
    );

  if (error) return <div className="text-center text-red-500">{error}</div>;

  if (artifacts.length === 0)
    return (
      <div className="flex justify-center items-center bg-[#1F1D1D] min-h-screen">
        <Helmet>
          <title>EGYPT - All Artifacts</title>
        </Helmet>
        <p className="text-white text-xl">No data found</p>
      </div>
    );

  return (
    <div className="bg-[#1F1D1D]">
      <Helmet>
        <title>EGYPT - All Artifacts</title>
      </Helmet>
      {/* Search bar */}
      <div className="flex justify-end items-center w-full pt-5 px-4">
        <input
          type="text"
          placeholder="Search artifacts..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-48 px-4 py-3 rounded-md bg-[#5D5453] text-[#E0D9D1] focus:ring-2 focus:ring-[#A9927D]"
        />
        <button
          onClick={handleSearch}
          className="ml-3 p-3 bg-[#A9927D] text-[#1F1D1D] rounded-md hover:bg-[#D1B38A]"
        >
          Search
        </button>
      </div>

      {/* Artifact cards */}
      <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-10 gap-5">
        {artifacts.map((artifact) => (
          <Card key={artifact._id} artifact={artifact} />
        ))}
      </div>
    </div>
  );
};

export default AllArtifacts;
