import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const AddArtifact = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const [addArtifacts, setAddArtifacts] = useState({
    artifactName: "",
    artifactImage: "",
    artifactType: "Tools",
    historicalContext: "",
    createdAt: "",
    discoveredAt: "",
    discoveredBy: "",
    presentLocation: "",
    userInfo: user?.email,
    liked_By: [],
    createdby: {
      displayName: user?.displayName || "Unknown User",
      email: user?.email || "No Email",
      photoURL: user?.photoURL || "No Photo",
    },
    react: 0,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAddArtifacts((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleAddArtifact = (e) => {
    e.preventDefault();
    axios
      .post(`${import.meta.env.VITE_API_BASE_URL}/add-artifact`, addArtifacts, {
        withCredentials: true,
      })
      .then((response) => {
        toast.success("Artifact added successfully!");
        navigate("/all-artifacts");
      })
      .catch((error) => {
        console.error("Error adding artifact:", error);
        toast.error("Failed to add artifact. Please try again.");
      });
  };

  return (
    <div>
      <Helmet>
        <title>EGYPT - Add Artifact</title>
      </Helmet>
      <div className="bg-[#EAE4D5] dark:bg-[#1F1D1D] min-h-screen py-20 flex items-center justify-center">
        <div className="w-full max-w-4xl p-8 space-y-6 rounded-xl bg-[#55524a] dark:bg-[#4A4746] text-white dark:text-[#E0D9D1]">
          <h1 className="text-2xl font-bold text-[#E67E22] text-center">Add New Artifact</h1>
          <form onSubmit={handleAddArtifact} className="space-y-6">
            {/* Artifact Name and Image */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1 text-sm">
                <label htmlFor="artifactName" className="block">
                  Artifact Name
                </label>
                <input
                  type="text"
                  name="artifactName"
                  value={addArtifacts.artifactName}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter artifact name"
                  className="w-full px-4 py-3 rounded-md bg-white/5 dark:bg-[#5D5453] focus:ring-2 focus:ring-[#9C6F42] dark:focus:ring-[#A9927D]"
                />
              </div>
              <div className="space-y-1 text-sm">
                <label htmlFor="artifactImage" className="block">
                  Artifact Image (Valid URL)
                </label>
                <input
                  type="url"
                  name="artifactImage"
                  required
                  value={addArtifacts.artifactImage}
                  onChange={handleInputChange}
                  placeholder="Enter image URL"
                  className="w-full px-4 py-3 rounded-md bg-white/5 dark:bg-[#5D5453] focus:ring-2 focus:ring-[#9C6F42] dark:focus:ring-[#A9927D]"
                />
              </div>
            </div>

            {/* Artifact Type and Historical Context */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1 text-sm">
                <label htmlFor="artifactType" className="block">
                  Artifact Type
                </label>
                <select
                  id="artifactType"
                  name="artifactType"
                  required
                  value={addArtifacts.artifactType}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-md bg-white/5 dark:bg-[#5D5453] focus:ring-2 focus:ring-[#9C6F42] dark:focus:ring-[#A9927D] text-gray-900 dark:text-[#E0D9D1]"
                >
                  <option
                    value="Tools"
                    className="bg-white dark:bg-[#5D5453] text-gray-900 dark:text-[#E0D9D1]"
                  >
                    Tools
                  </option>
                  <option
                    value="Weapons"
                    className="bg-white dark:bg-[#5D5453] text-gray-900 dark:text-[#E0D9D1]"
                  >
                    Weapons
                  </option>
                  <option
                    value="Documents"
                    className="bg-white dark:bg-[#5D5453] text-gray-900 dark:text-[#E0D9D1]"
                  >
                    Documents
                  </option>
                  <option
                    value="Writings"
                    className="bg-white dark:bg-[#5D5453] text-gray-900 dark:text-[#E0D9D1]"
                  >
                    Writings
                  </option>
                  <option
                    value="Burial Artifact"
                    className="bg-white dark:bg-[#5D5453] text-gray-900 dark:text-[#E0D9D1]"
                  >
                    Burial Artifact
                  </option>
                  <option
                    value="Monument"
                    className="bg-white dark:bg-[#5D5453] text-gray-900 dark:text-[#E0D9D1]"
                  >
                    Monument
                  </option>
                </select>
              </div>
              <div className="space-y-1 text-sm">
                <label htmlFor="historicalContext" className="block">
                  Historical Context
                </label>
                <textarea
                  name="historicalContext"
                  value={addArtifacts.historicalContext}
                  onChange={handleInputChange}
                  required
                  rows="3"
                  placeholder="Enter historical context"
                  className="w-full px-4 py-3 rounded-md bg-white/5 dark:bg-[#5D5453] focus:ring-2 focus:ring-[#9C6F42] dark:focus:ring-[#A9927D]"
                ></textarea>
              </div>
            </div>

            {/* Created At and Discovered At */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1 text-sm">
                <label htmlFor="createdAt" className="block">
                  Created At
                </label>
                <input
                  type="text"
                  name="createdAt"
                  required
                  value={addArtifacts.createdAt}
                  onChange={handleInputChange}
                  placeholder="e.g., 100 BC"
                  className="w-full px-4 py-3 rounded-md bg-white/5 dark:bg-[#5D5453] focus:ring-2 focus:ring-[#9C6F42] dark:focus:ring-[#A9927D]"
                />
              </div>
              <div className="space-y-1 text-sm">
                <label htmlFor="discoveredAt" className="block">
                  Discovered At
                </label>
                <input
                  type="text"
                  name="discoveredAt"
                  required
                  value={addArtifacts.discoveredAt}
                  onChange={handleInputChange}
                  placeholder="e.g., 1799"
                  className="w-full px-4 py-3 rounded-md bg-white/5 dark:bg-[#5D5453] focus:ring-2 focus:ring-[#9C6F42] dark:focus:ring-[#A9927D]"
                />
              </div>
            </div>

            {/* Discovered By and Present Location */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1 text-sm">
                <label htmlFor="discoveredBy" className="block">
                  Discovered By
                </label>
                <input
                  type="text"
                  name="discoveredBy"
                  required
                  value={addArtifacts.discoveredBy}
                  onChange={handleInputChange}
                  placeholder="Enter discoverer's name"
                  className="w-full px-4 py-3 rounded-md bg-white/5 dark:bg-[#5D5453] focus:ring-2 focus:ring-[#9C6F42] dark:focus:ring-[#A9927D]"
                />
              </div>
              <div className="space-y-1 text-sm">
                <label htmlFor="presentLocation" className="block">
                  Present Location
                </label>
                <input
                  type="text"
                  name="presentLocation"
                  required
                  value={addArtifacts.presentLocation}
                  onChange={handleInputChange}
                  placeholder="Enter present location"
                  className="w-full px-4 py-3 rounded-md bg-white/5 dark:bg-[#5D5453] focus:ring-2 focus:ring-[#9C6F42] dark:focus:ring-[#A9927D]"
                />
              </div>
            </div>

            {/* Logged-In User Information */}
            <div className="space-y-1 text-sm">
              <label htmlFor="userInfo" className="block">
                Added By
              </label>
              <input
                type="text"
                name="userInfo"
                defaultValue={user?.email}
                readOnly
                className="w-full px-4 py-3 rounded-md bg-white/5 dark:bg-[#5D5453] focus:ring-2 focus:ring-[#9C6F42] dark:focus:ring-[#A9927D]"
              />
            </div>

            {/* Add Artifact Button */}
            <button
              type="submit"
              className="block w-full p-3 text-center rounded-sm bg-[#9C6F42] dark:bg-[#A9927D] text-white hover:bg-[#7B5A36] dark:hover:bg-[#D1B38A] transition-colors"
            >
              Add Artifact
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddArtifact;
