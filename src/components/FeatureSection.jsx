import React from "react";
import { Plus } from "lucide-react";

const FeatureSection = () => {
  return (
    <div className="bg-[#161616] py-10 px-4">
      <div className="w-[90%] mx-auto flex flex-col lg:flex-row gap-4 items-center justify-between">
        {/* Feature Boxes */}
        <div className="bg-[#1c1c1c] text-white flex-1 rounded-xl w-full flex flex-col lg:flex-row divide-y lg:divide-y-0 lg:divide-x divide-[#444]">
          {/* Box 1 */}
          <div className="flex-1 text-center p-10">
            <h3 className="text-xl font-semibold text-[#E5C7A2] mb-2">Many Collection</h3>
            <p className="text-sm text-gray-300">
              Explore a wide range of unique and creative visuals curated just for you.
            </p>
          </div>
          {/* Box 2 */}
          <div className="flex-1 text-center p-6">
            <h3 className="text-xl font-semibold text-[#E5C7A2] mb-2">Photo Free</h3>
            <p className="text-sm text-gray-300">
              Download high-quality images without any watermark or subscription fees.
            </p>
          </div>
          {/* Box 3 */}
          <div className="flex-1 text-center p-6">
            <h3 className="text-xl font-semibold text-[#E5C7A2] mb-2">Free Guide</h3>
            <p className="text-sm text-gray-300">
              Get expert tips and step-by-step guides to boost your creative projects.
            </p>
          </div>
        </div>

        {/* Visitors Card */}
        <div className="bg-[#E8DECE] rounded-xl px-6 py-6 text-center w-full lg:w-auto">
          <h4 className="text-lg font-semibold text-[#1c1c1c] mb-4">
            More Than 16K People<br />Visited
          </h4>
          <div className="flex items-center justify-center space-x-[-10px]">
            <img
              className="w-10 h-10 rounded-full border-2 border-white"
              src="https://randomuser.me/api/portraits/women/1.jpg"
              alt="User1"
            />
            <img
              className="w-10 h-10 rounded-full border-2 border-white"
              src="https://randomuser.me/api/portraits/men/2.jpg"
              alt="User2"
            />
            <img
              className="w-10 h-10 rounded-full border-2 border-white"
              src="https://randomuser.me/api/portraits/women/3.jpg"
              alt="User3"
            />
            <div className="w-10 h-10 flex items-center justify-center bg-black text-white rounded-full border-2 border-white">
              <Plus size={20} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
