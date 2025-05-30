import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Card from "../components/Card";
import LoadingSpinner from "../components/Loader";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register plugin once
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const FeaturedArtifacts = () => {
  const [artifacts, setArtifacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const hadleBtn = () => {
    navigate("/all-artifacts");
  };

  useEffect(() => {
    const fetchArtifacts = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_BASE_URL}/featured-artifacts`
        );
        const sortedArtifacts = response.data.sort((a, b) => b.react - a.react);
        setArtifacts(sortedArtifacts);
        setLoading(false);

        // Simple card animation after data loads
        gsap.utils.toArray(".artifact-card").forEach((card, i) => {
          gsap.from(card, {
            opacity: 0,
            y: 20,
            duration: 1,
            stagger: true,
            delay: i * 0.23,
            scrollTrigger: {
              trigger: card,
              start: "top 90%",
            },
          });
        });
      } catch (err) {
        setError("Failed to load artifacts");
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
      <div className="flex justify-center items-center bg-[#302E2F] dark:bg-[#1A1A1A] min-h-screen">
        <p className="text-white text-xl">No data found</p>
      </div>
    );

  return (
    <div className="bg-[#EAE4D5] dark:bg-[#1A1A1A] min-h-screen">
      <div className="w-[89%] mx-auto py-10">
        <div className="text-center mb-8">
          <h1 className="text-[#D99578] text-3xl font-bold">Featured Artifacts</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {artifacts.map((artifact) => (
            <div key={artifact._id} className="artifact-card">
              <Card artifact={artifact} />
            </div>
          ))}
        </div>

        <div className="m-5 text-center">
          <button
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
              hadleBtn();
            }}
            className="bg-[#9C6F42] dark:bg-[#E67E22] hover:bg-[#7B5A36] dark:hover:bg-[#D35400] text-white px-5 py-2 rounded-lg font-semibold"
          >
            See All
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedArtifacts;
