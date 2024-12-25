import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../provider/AuthProvider";
import Card from "../components/Card";
import LoadingSpinner from "../components/Loader";

const LikedArtifact = () => {
  const { user } = useContext(AuthContext); // Get user email from context
  const [likedArtifactIds, setLikedArtifactIds] = useState([]); // State to store liked artifact IDs
  const [allArtifacts, setAllArtifacts] = useState([]); // State to store all artifacts
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    if (user?.email) {
      // Fetch liked artifact IDs
      axios
        .get(`${import.meta.env.VITE_API_BASE_URL}/liked-artifacts/${user.email}`)
        .then((response) => {
          setLikedArtifactIds(response.data.artifactIds); // Store liked artifact IDs
        })
        .catch((error) => {
          console.error("Error fetching liked artifacts:", error);
        });
    }
  }, [user?.email]);

  useEffect(() => {
    // Fetch all artifacts after liked artifact IDs are fetched
    axios
      .get(`${import.meta.env.VITE_API_BASE_URL}/all-artifacts`)
      .then((response) => {
        setAllArtifacts(response.data); // Store all artifact details
        setLoading(false); // Stop loading after data is fetched
      })
      .catch((error) => {
        console.error("Error fetching all artifacts:", error);
        setLoading(false);
      });
  }, [likedArtifactIds]); // Fetch all artifacts after liked artifacts are loaded

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <div className="bg-[#1F1D1D]">
      {/* Title */}
      <h1 className="text-white text-3xl pt-8 text-center">Liked Artifacts</h1>

      {/* Liked Artifacts Cards */}
      <div className="w-11/12 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 py-10 gap-5">
        {/* Render a card for each artifact that matches the liked artifact IDs */}
        {allArtifacts.map((artifact) => {
          const isLiked = likedArtifactIds.includes(artifact._id);
          if (isLiked) {
            return <Card key={artifact._id} artifact={artifact} />;
          }
          return null; // If not matched, return null
        })}
      </div>
    </div>
  );
};

export default LikedArtifact;
