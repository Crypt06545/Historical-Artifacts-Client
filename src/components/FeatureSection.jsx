import React from "react";
import { Plus } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const FeatureSection = () => {
  const tl = gsap.timeline();

  useGSAP(() => {
    tl.from(
      ".animate-obj",
      {
        y: 20,
        opacity: 0,
        duration: 1,
        delay: 0.8,
      },
    );
  }, []);

  return (
    <div className="py-10 px-4 bg-[#EAE4D5] dark:bg-[#1A1A1A]">
      <div className="w-[90%] mx-auto flex flex-col lg:flex-row gap-4 items-center justify-between">
        {/* Feature Boxes */}
        <div className="bg-[#585858] dark:bg-[#2D2D2D] text-white flex-1 rounded-xl w-full flex flex-col lg:flex-row divide-y lg:divide-y-0 lg:divide-x divide-[#444] dark:divide-[#333]">
          {/* Box 1 */}
          <div className="flex-1 text-center p-10">
            <h3 className="animate-obj text-xl font-semibold text-[#D99578] dark:text-[#E67E22] mb-2">Many Collection</h3>
            <p className="animate-obj text-sm text-gray-300">
              Explore a wide range of unique and creative visuals curated just for you.
            </p>
          </div>
          {/* Box 2 */}
          <div className="flex-1 text-center p-6">
            <h3 className="animate-obj text-xl font-semibold text-[#D99578] dark:text-[#E67E22] mb-2">Photo Free</h3>
            <p className="animate-obj text-sm text-gray-300">
              Download high-quality images without any watermark or subscription fees.
            </p>
          </div>
          {/* Box 3 */}
          <div className="flex-1 text-center p-6">
            <h3 className="animate-obj text-xl font-semibold text-[#D99578] dark:text-[#E67E22] mb-2">Free Guide</h3>
            <p className="animate-obj text-sm text-gray-300">
              Get expert tips and step-by-step guides to boost your creative projects.
            </p>
          </div>
        </div>

        {/* Visitors Card */}
        <div className="animate-obj bg-[#9C6F42] dark:bg-[#E67E22] rounded-xl px-6 py-6 text-center w-full lg:w-auto">
          <h4 className="text-lg font-semibold text-[#1c1c1c] dark:text-[#E5C7A2] mb-4">
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
