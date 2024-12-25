import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
const AddArtifact = () => {
  const { user } = useContext(AuthContext);
  // console.log(user);
  const navigate = useNavigate();

  // console.log(user?.email);

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
    e.preventDefault(); // Prevent the default form submission behavior
    axios
      .post(`${import.meta.env.VITE_API_BASE_URL}/add-artifact`, addArtifacts, {
        withCredentials: true,
      })
      .then((response) => {
        // Handle the successful response
        // console.log("Artifact added successfully:", response.data);
        toast.success("Artifact added successfully!"); // Show the success toast
        navigate("/all-artifacts"); // Navigate to the desired page
      })
      .catch((error) => {
        // Handle any errors
        console.error("Error adding artifact:", error);
        toast.error("Failed to add artifact. Please try again."); // Display an error message
      });
  };

  return (
    <div>
      <Helmet>
        <title>EGYPT - Add Artifact</title>
      </Helmet>
      <div className="bg-[#1F1D1D] min-h-screen py-20 flex items-center justify-center">
        <div className="w-full max-w-4xl p-8 space-y-6 rounded-xl bg-[#4A4746] text-[#E0D9D1]">
          <h1 className="text-2xl font-bold text-center text-[#E0D9D1]">
            Add New Artifact
          </h1>
          <form onSubmit={handleAddArtifact} className="space-y-6">
            {/* Artifact Name and Image (Side by Side) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1 text-sm">
                <label htmlFor="artifactName" className="block text-[#E0D9D1]">
                  Artifact Name
                </label>
                <input
                  type="text"
                  name="artifactName"
                  value={addArtifacts.artifactName}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter artifact name"
                  className="w-full px-4 py-3 rounded-md bg-[#5D5453] text-[#E0D9D1] focus:ring-2 focus:ring-[#A9927D]"
                />
              </div>
              <div className="space-y-1 text-sm">
                <label htmlFor="artifactImage" className="block text-[#E0D9D1]">
                  Artifact Image (Valid URL)
                </label>
                <input
                  type="url"
                  name="artifactImage"
                  required
                  value={addArtifacts.artifactImage}
                  onChange={handleInputChange}
                  placeholder="Enter image URL"
                  className="w-full px-4 py-3 rounded-md bg-[#5D5453] text-[#E0D9D1] focus:ring-2 focus:ring-[#A9927D]"
                />
              </div>
            </div>

            {/* Artifact Type and Historical Context (Side by Side) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1 text-sm">
                <label htmlFor="artifactType" className="block text-[#E0D9D1]">
                  Artifact Type
                </label>
                <select
                  name="artifactType"
                  required
                  value={addArtifacts.artifactType}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-md bg-[#5D5453] text-[#E0D9D1] focus:ring-2 focus:ring-[#A9927D]"
                >
                  <option value="Tools">Tools</option>
                  <option value="Weapons">Weapons</option>
                  <option value="Documents">Documents</option>
                  <option value="Writings">Writings</option>
                  <option value="Burial Artifact">Burial Artifact</option>
                  <option value="Monument">Monument</option>
                </select>
              </div>
              <div className="space-y-1 text-sm">
                <label
                  htmlFor="historicalContext"
                  className="block text-[#E0D9D1]"
                >
                  Historical Context
                </label>
                <textarea
                  name="historicalContext"
                  value={addArtifacts.historicalContext}
                  onChange={handleInputChange}
                  required
                  rows="3"
                  placeholder="Enter historical context"
                  className="w-full px-4 py-3 rounded-md bg-[#5D5453] text-[#E0D9D1] focus:ring-2 focus:ring-[#A9927D]"
                ></textarea>
              </div>
            </div>

            {/* Created At and Discovered At (Side by Side) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1 text-sm">
                <label htmlFor="createdAt" className="block text-[#E0D9D1]">
                  Created At
                </label>
                <input
                  type="text"
                  name="createdAt"
                  required
                  value={addArtifacts.createdAt}
                  onChange={handleInputChange}
                  placeholder="e.g., 100 BC"
                  className="w-full px-4 py-3 rounded-md bg-[#5D5453] text-[#E0D9D1] focus:ring-2 focus:ring-[#A9927D]"
                />
              </div>
              <div className="space-y-1 text-sm">
                <label htmlFor="discoveredAt" className="block text-[#E0D9D1]">
                  Discovered At
                </label>
                <input
                  type="text"
                  name="discoveredAt"
                  required
                  value={addArtifacts.discoveredAt}
                  onChange={handleInputChange}
                  placeholder="e.g., 1799"
                  className="w-full px-4 py-3 rounded-md bg-[#5D5453] text-[#E0D9D1] focus:ring-2 focus:ring-[#A9927D]"
                />
              </div>
            </div>

            {/* Discovered By and Present Location (Side by Side) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1 text-sm">
                <label htmlFor="discoveredBy" className="block text-[#E0D9D1]">
                  Discovered By
                </label>
                <input
                  type="text"
                  name="discoveredBy"
                  required
                  value={addArtifacts.discoveredBy}
                  onChange={handleInputChange}
                  placeholder="Enter discoverer's name"
                  className="w-full px-4 py-3 rounded-md bg-[#5D5453] text-[#E0D9D1] focus:ring-2 focus:ring-[#A9927D]"
                />
              </div>
              <div className="space-y-1 text-sm">
                <label
                  htmlFor="presentLocation"
                  className="block text-[#E0D9D1]"
                >
                  Present Location
                </label>
                <input
                  type="text"
                  name="presentLocation"
                  required
                  value={addArtifacts.presentLocation}
                  onChange={handleInputChange}
                  placeholder="Enter present location"
                  className="w-full px-4 py-3 rounded-md bg-[#5D5453] text-[#E0D9D1] focus:ring-2 focus:ring-[#A9927D]"
                />
              </div>
            </div>

            {/* Logged-In User Information */}
            <div className="space-y-1 text-sm">
              <label htmlFor="userInfo" className="block text-[#E0D9D1]">
                Added By
              </label>
              <input
                type="text"
                name="userInfo"
                defaultValue={user?.email}
                // value={addArtifacts.userInfo}
                onChange={handleInputChange}
                readOnly
                className="w-full px-4 py-3 rounded-md bg-[#5D5453] text-[#E0D9D1] focus:ring-2 focus:ring-[#A9927D]"
              />
            </div>

            {/* Add Artifact Button */}
            <button className="block w-full p-3 text-center rounded-sm bg-[#A9927D] text-[#1F1D1D] hover:bg-[#D1B38A]">
              Add Artifact
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddArtifact;
