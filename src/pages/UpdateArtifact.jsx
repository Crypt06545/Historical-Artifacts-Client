import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import axios from "axios";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const UpdateArtifact = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const { id } = useParams(); // Get artifact ID from the route

  const [artifact, setArtifact] = useState({
    artifactName: "",
    artifactImage: "",
    artifactType: "Tools",
    historicalContext: "",
    createdAt: "",
    discoveredAt: "",
    discoveredBy: "",
    presentLocation: "",
    userInfo: user?.email,
    createdby: {
      displayName: user?.displayName || "Unknown User",
      email: user?.email || "No Email",
      photoURL: user?.photoURL || "No Photo",
    },
  });

  // Fetch artifact details to populate the form
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_BASE_URL}/view-artifact-details/${id}`)
      .then((response) => {
        setArtifact(response.data);
      })
      .catch((error) => {
        console.error("Error fetching artifact data:", error);
        toast.error("Failed to fetch artifact details.");
      });
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setArtifact((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleUpdateArtifact = (e) => {
    e.preventDefault();

    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to update the artifact information?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, update it!",
      cancelButtonText: "No, cancel!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .patch(
            `${import.meta.env.VITE_API_BASE_URL}/update-artifact/${id}`,
            artifact
          )
          .then((response) => {
            // console.log("Artifact updated successfully:", response.data);
            toast.success("Artifact updated successfully!");
            Swal.fire(
              "Updated!",
              "The artifact has been updated.",
              "success"
            ).then(() => {
              navigate("/all-artifacts"); // Navigate to the desired page
            });
          })
          .catch((error) => {
            console.error("Error updating artifact:", error);
            toast.error("Failed to update artifact. Please try again.");
          });
      } else {
        Swal.fire("Cancelled", "The update has been cancelled.", "error");
      }
    });
  };

  return (
    <div className="bg-[#1F1D1D] min-h-screen py-20 flex items-center justify-center">
      <div className="w-full max-w-4xl p-8 space-y-6 rounded-xl bg-[#4A4746] text-[#E0D9D1]">
        <h1 className="text-2xl font-bold text-center text-[#E0D9D1]">
          Update Artifact
        </h1>
        <form onSubmit={handleUpdateArtifact} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1 text-sm">
              <label htmlFor="artifactName" className="block text-[#E0D9D1]">
                Artifact Name
              </label>
              <input
                type="text"
                name="artifactName"
                defaultValue={artifact?.artifactName}
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
                defaultValue={artifact?.artifactImage}
                onChange={handleInputChange}
                required
                placeholder="Enter image URL"
                className="w-full px-4 py-3 rounded-md bg-[#5D5453] text-[#E0D9D1] focus:ring-2 focus:ring-[#A9927D]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1 text-sm">
              <label htmlFor="artifactType" className="block text-[#E0D9D1]">
                Artifact Type
              </label>
              <select
                name="artifactType"
                defaultValue={artifact?.artifactType}
                onChange={handleInputChange}
                required
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
                defaultValue={artifact?.historicalContext}
                onChange={handleInputChange}
                required
                rows="3"
                placeholder="Enter historical context"
                className="w-full px-4 py-3 rounded-md bg-[#5D5453] text-[#E0D9D1] focus:ring-2 focus:ring-[#A9927D]"
              ></textarea>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1 text-sm">
              <label htmlFor="createdAt" className="block text-[#E0D9D1]">
                Created At
              </label>
              <input
                type="text"
                name="createdAt"
                defaultValue={artifact?.createdAt}
                onChange={handleInputChange}
                required
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
                defaultValue={artifact?.discoveredAt}
                onChange={handleInputChange}
                required
                placeholder="e.g., 1799"
                className="w-full px-4 py-3 rounded-md bg-[#5D5453] text-[#E0D9D1] focus:ring-2 focus:ring-[#A9927D]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1 text-sm">
              <label htmlFor="discoveredBy" className="block text-[#E0D9D1]">
                Discovered By
              </label>
              <input
                type="text"
                name="discoveredBy"
                defaultValue={artifact?.discoveredBy}
                onChange={handleInputChange}
                required
                placeholder="Enter discoverer's name"
                className="w-full px-4 py-3 rounded-md bg-[#5D5453] text-[#E0D9D1] focus:ring-2 focus:ring-[#A9927D]"
              />
            </div>
            <div className="space-y-1 text-sm">
              <label htmlFor="presentLocation" className="block text-[#E0D9D1]">
                Present Location
              </label>
              <input
                type="text"
                name="presentLocation"
                defaultValue={artifact?.presentLocation}
                onChange={handleInputChange}
                required
                placeholder="Enter present location"
                className="w-full px-4 py-3 rounded-md bg-[#5D5453] text-[#E0D9D1] focus:ring-2 focus:ring-[#A9927D]"
              />
            </div>
          </div>

          <button
            type="submit"
            className="block w-full p-3 text-center rounded-sm bg-[#A9927D] text-[#1F1D1D] hover:bg-[#D1B38A]"
          >
            Update Artifact
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateArtifact;
