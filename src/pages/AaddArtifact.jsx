import React from 'react';

const AddArtifact = () => {
  return (
    <div className="bg-[#1F1D1D] min-h-screen py-20 flex items-center justify-center">
      <div className="w-full max-w-4xl p-8 space-y-6 rounded-xl bg-[#4A4746] text-[#E0D9D1]">
        <h1 className="text-2xl font-bold text-center text-[#E0D9D1]">Add New Artifact</h1>
        <form noValidate="" action="" className="space-y-6">
          {/* Artifact Name and Image (Side by Side) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1 text-sm">
              <label htmlFor="artifactName" className="block text-[#E0D9D1]">
                Artifact Name
              </label>
              <input
                type="text"
                name="artifactName"
                id="artifactName"
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
                id="artifactImage"
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
                id="artifactType"
                className="w-full px-4 py-3 rounded-md bg-[#5D5453] text-[#E0D9D1] focus:ring-2 focus:ring-[#A9927D]"
              >
                <option value="Tools">Tools</option>
                <option value="Weapons">Weapons</option>
                <option value="Documents">Documents</option>
                <option value="Writings">Writings</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="space-y-1 text-sm">
              <label htmlFor="historicalContext" className="block text-[#E0D9D1]">
                Historical Context
              </label>
              <textarea
                name="historicalContext"
                id="historicalContext"
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
                id="createdAt"
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
                id="discoveredAt"
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
                id="discoveredBy"
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
                id="presentLocation"
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
              id="userInfo"
              defaultValue="John Doe (johndoe@example.com)" // This should be dynamically populated
            //   readOnly
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
  );
};

export default AddArtifact;
