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
      axios
        .get(
          `${import.meta.env.VITE_API_BASE_URL}/liked-artifacts/${user.email}`,
          { withCredentials: true }
        )
        .then((response) => {
          setLikedArtifactIds(response.data.artifactIds);
        })
        .catch((error) => {
          console.error("Error fetching liked artifacts:", error);
        });
    }
  }, [user?.email]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_BASE_URL}/all-artifacts`)
      .then((response) => {
        setAllArtifacts(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching all artifacts:", error);
        setLoading(false);
      });
  }, [likedArtifactIds]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-[#302E2F] dark:bg-[#1F1D1D]">
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
    <div className="min-h-screen bg-[#EAE4D5] dark:bg-[#1F1D1D]">
      <Helmet>
        <title>EGYPT - Liked Artifact</title>
      </Helmet>
      <div className="w-[89%] mx-auto py-10">
        {/* Title */}
        <h1 className="text-black dark:text-[#E0D9D1] text-3xl font-bold text-center mb-8">
          Liked Artifacts
        </h1>

        {/* Liked Artifacts Cards or No Data Message */}
        <div className="py-10">
          {likedArtifacts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
              {likedArtifacts.map((artifact) => (
                <Card key={artifact._id} artifact={artifact} />
              ))}
            </div>
          ) : (
            <div className="text-center text-black dark:text-[#E0D9D1] text-xl">
              No Liked Artifacts Found
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LikedArtifact;