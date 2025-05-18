import { useState, useEffect, useContext } from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import axios from "axios";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import { AuthContext } from "../provider/AuthProvider";
import LoadingSpinner from "../components/Loader";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const MyAddedArtifacts = () => {
  const { user } = useContext(AuthContext);
  const [artifacts, setArtifacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArtifacts = async () => {
      if (user?.email) {
        try {
          const response = await axios.get(
            `${import.meta.env.VITE_API_BASE_URL}/my-add-artifact/${user?.email}`,
            { withCredentials: true }
          );
          setArtifacts(response.data);
        } catch (err) {
          setError("Failed to fetch artifacts.", err);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchArtifacts();
  }, [user?.email]);

  const handleDelete = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await axios.delete(
            `${import.meta.env.VITE_API_BASE_URL}/rm-my-artifact/${id}`,
            { withCredentials: true }
          );
          if (response.data.deletedCount > 0) {
            setArtifacts((prevArtifacts) =>
              prevArtifacts.filter((artifact) => artifact._id !== id)
            );
            toast.success("Artifact deleted successfully!");
          } else {
            toast.error("Failed to delete the artifact.");
          }
        } catch (error) {
          toast.error("An error occurred while deleting the artifact.", error);
        }
      } else {
        toast.error("Deletion canceled.");
      }
    });
  };

  if (loading) {
    return (
      <>
        <Helmet>
          <title>EGYPT - My Added Artifact</title>
        </Helmet>
        <LoadingSpinner />
      </>
    );
  }

  if (!loading && artifacts.length === 0) {
    return (
      <div className="text-center min-h-screen flex justify-center items-center bg-[#EAE4D5] dark:bg-[#1F1D1D]">
        <Helmet>
          <title>EGYPT - My Added Artifact</title>
        </Helmet>
        <p className="text-black dark:text-[#E0D9D1] text-xl">No data found</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-[#9C6F42] dark:text-[#D1B38A]">
        <Helmet>
          <title>EGYPT - My Added Artifact</title>
        </Helmet>
        {error}
      </div>
    );
  }

  return (
    <div>
      <Helmet>
        <title>EGYPT - My Added Artifact</title>
      </Helmet>
      <div className="bg-[#302E2F] dark:bg-[#1F1D1D] min-h-screen py-10 md:px-6 px-2">
        <div className="overflow-x-auto bg-white/10 dark:bg-[#4A4746] p-6 rounded-xl shadow-lg">
          <table className="table w-full text-white dark:text-[#E0D9D1]">
            <thead className="text-[#9C6F42] dark:text-[#D1B38A]">
              <tr className="border-b-2 border-[#9C6F42] dark:border-[#D1B38A]">
                <th className="py-3 px-4">Image</th>
                <th className="py-3 px-4">Name</th>
                <th className="py-3 px-4">Created At</th>
                <th className="py-3 px-4 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {artifacts.map((artifact) => (
                <tr key={artifact._id} className="hover:bg-white/5 dark:hover:bg-[#5D5453]">
                  <td className="py-3 px-4 text-center">
                    <img
                      src={artifact?.artifactImage || "https://via.placeholder.com/50x50"}
                      alt={artifact.name}
                      className="rounded-full w-[50px] h-[50px] object-cover"
                    />
                  </td>
                  <td className="py-3 px-4">{artifact?.artifactName}</td>
                  <td className="py-3 px-4">{artifact.createdAt}</td>
                  <td className="py-3 px-4 flex justify-center space-x-4">
                    <button className="text-[#9C6F42] dark:text-[#D1B38A] hover:text-[#7B5A36] dark:hover:text-[#A9927D]">
                      <Link to={`/update-artifact/${artifact?._id}`}>
                        <FaEdit size={20} />
                      </Link>
                    </button>
                    <button
                      onClick={() => handleDelete(artifact?._id)}
                      className="text-[#9C6F42] dark:text-[#D1B38A] hover:text-[#7B5A36] dark:hover:text-[#A9927D]"
                    >
                      <FaTrashAlt size={20} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyAddedArtifacts;