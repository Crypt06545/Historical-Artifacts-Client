import React from "react";
import { FaEdit, FaTrashAlt, FaImage } from "react-icons/fa"; // Importing icons

const MyAddedArtifacts = () => {
  return (
    <div className="bg-[#1F1D1D] min-h-screen py-10 md:px-6 px-2">
      <div className="overflow-x-auto bg-[#4A4746] p-6 rounded-xl shadow-lg">
        <table className="table w-full text-[#E0D9D1]">
          {/* Table Header */}
          <thead className="text-[#D1B38A]">
            <tr className="border-b-2 border-[#D1B38A]">
              <th className="py-3 px-4 ">Image</th>
              <th className="py-3 px-4">Name</th>
              <th className="py-3 px-4">Created At</th>
              <th className="py-3 px-4 text-center">Actions</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {/* Row 1 */}
            <tr className="hover:bg-[#5D5453]">

              <td className="py-3 px-4 text-center">
                <img
                  src="https://via.placeholder.com/50x50"
                  alt="Artifact"
                  className="rounded-full"
                />
              </td>
              <td className="py-3 px-4">Cy Ganderton</td>
              <td className="py-3 px-4">2024-01-01</td>
              <td className="py-3 px-4 flex justify-center space-x-4">
                <button className="text-[#D1B38A] hover:text-[#A9927D]">
                  <FaImage size={20} />
                </button>
                <button className="text-[#D1B38A] hover:text-[#A9927D]">
                  <FaEdit size={20} />
                </button>
                <button className="text-[#D1B38A] hover:text-[#A9927D]">
                  <FaTrashAlt size={20} />
                </button>
              </td>
            </tr>

            {/* Row 2 */}
            <tr className="hover:bg-[#5D5453]">
              <td className="py-3 px-4 text-center">
                <img
                  src="https://via.placeholder.com/50x50"
                  alt="Artifact"
                  className="rounded-full"
                />
              </td>
              <td className="py-3 px-4">Hart Hagerty</td>
              <td className="py-3 px-4">2024-02-15</td>
              <td className="py-3 px-4 flex justify-center space-x-4">
                <button className="text-[#D1B38A] hover:text-[#A9927D]">
                  <FaImage size={20} />
                </button>
                <button className="text-[#D1B38A] hover:text-[#A9927D]">
                  <FaEdit size={20} />
                </button>
                <button className="text-[#D1B38A] hover:text-[#A9927D]">
                  <FaTrashAlt size={20} />
                </button>
              </td>
            </tr>

            {/* Row 3 */}
            <tr className="hover:bg-[#5D5453]">
              <td className="py-3 px-4 text-center">
                <img
                  src="https://via.placeholder.com/50x50"
                  alt="Artifact"
                  className="rounded-full"
                />
              </td>
              <td className="py-3 px-4">Brice Swyre</td>
              <td className="py-3 px-4">2024-03-10</td>
              <td className="py-3 px-4 flex justify-center space-x-4">
                <button className="text-[#D1B38A] hover:text-[#A9927D]">
                  <FaImage size={20} />
                </button>
                <button className="text-[#D1B38A] hover:text-[#A9927D]">
                  <FaEdit size={20} />
                </button>
                <button className="text-[#D1B38A] hover:text-[#A9927D]">
                  <FaTrashAlt size={20} />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};




export default MyAddedArtifacts;
