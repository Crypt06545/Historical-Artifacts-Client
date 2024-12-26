import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../provider/AuthProvider";
import Card from "../components/Card";
import LoadingSpinner from "../components/Loader";
import { Helmet } from "react-helmet-async";

const LikedArtifact = () => {
  const { user } = useContext(AuthContext);
  const [likedArtifactIds, setLikedArtifactIds] = useState([]);
  const [allArtifacts, setAllArtifacts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user?.email) {
      // Fetch liked artifact IDs
      axios
        .get(
          `${import.meta.env.VITE_API_BASE_URL}/liked-artifacts/${user.email}`,
          { withCredentials: true }
        )
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
        <Helmet>
          <title>EGYPT - Liked Artifact</title>
        </Helmet>
        <LoadingSpinner />
      </div>
    );
  }

  const likedArtifacts = allArtifacts.filter((artifact) =>
    likedArtifactIds.includes(artifact._id)
  );

  return (
    <div className="min-h-screen bg-[#1F1D1D]">
      <Helmet>
        <title>EGYPT - Liked Artifact</title>
      </Helmet>
      <div className="">
        {/* Title */}
        <h1 className="text-white text-3xl pt-8 text-center">
          Liked Artifacts
        </h1>

        {/* Liked Artifacts Cards or No Data Message */}
        <div className="w-11/12 mx-auto py-10">
          {likedArtifacts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5">
              {likedArtifacts.map((artifact) => (
                <Card key={artifact._id} artifact={artifact} />
              ))}
            </div>
          ) : (
            <div className="text-center text-white text-xl">
              No Liked Artifacts Found
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LikedArtifact;
