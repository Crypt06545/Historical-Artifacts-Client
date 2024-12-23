import { useState, useEffect } from "react";
import axios from "axios";
import Card from "../components/Card";
import LoadingSpinner from "../components/Loader";

const AllArtifacts = () => {
  const [artifacts, setArtifacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArtifacts = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_BASE_URL}/all-artifacts`
        );
        setArtifacts(response.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to load artifacts", err);
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
    <div className="bg-[#1F1D1D]">
      <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10 gap-5">
        {artifacts.map((artifact) => (
          <Card key={artifact._id} artifact={artifact} />
        ))}
      </div>
    </div>
  );
};

export default AllArtifacts;
