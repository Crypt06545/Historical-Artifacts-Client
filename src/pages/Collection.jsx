import { FaCheckCircle } from "react-icons/fa";
import { Button } from "@heroui/react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useNavigate } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const Collection = () => {
  const navigate = useNavigate();

  const hadleLern = () => {
    navigate("/all-artifacts");
  };
  useGSAP(() => {
    gsap.from(".info", {
      y: 100,
      opacity: 0,
      duration: 0.5,
      scrollTrigger: {
        trigger: ".info",
        start: "top 80%",
        // toggleActions: "play none none reverse",
      },
    });

    gsap.from(".gallery-img", {
      opacity: 0,
      y: 50,
      duration: 0.6,
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".gallery-img",
        start: "top 85%",
      },
    });

    gsap.from(".features li", {
      x: -50,
      opacity: 0,
      duration: 0.5,
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".features",
        start: "top 85%",
      },
    });
  }, []);

  return (
    <div className="bg-[#1F1D1D]  text-white py-12  px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl my-10 mx-auto">
        <div className="info flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <h1 className="text-4xl font-bold mb-2">
              Classic Hall, Quality Collection
            </h1>
            <p className="text-[#CCCCCC]">
              Explore timeless elegance and artistic mastery in our curated
              collection. Each piece tells a story of heritage and
              craftsmanship.
            </p>
          </div>

          <div>
            <Button
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
                hadleLern();
              }}
              className="bg-[#9C6F42] hover:bg-[#7B5A36] text-white font-semibold py-2 px-6 rounded-full shadow transition duration-300"
            >
              Learn More
            </Button>
          </div>
        </div>

        <hr className="border-[#333333] mb-12" />

        <div className="flex flex-col md:flex-row gap-8 items-start">
          {/* Image Section */}
          <div className="flex flex-col md:flex-row md:w-2/3 gap-8">
            <div className="gallery-img w-full md:w-1/2 rounded-lg overflow-hidden">
              <img
                src="https://kitpro.site/lastoria/wp-content/uploads/sites/251/2024/06/5-16-768x698.jpg"
                alt="Classic Hall Interior"
                className="w-full h-auto object-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://placehold.co/600x400/333/FFF?text=Image+Not+Found";
                }}
              />
            </div>
            <div className="gallery-img w-full md:w-1/2 rounded-lg overflow-hidden">
              <img
                src="https://kitpro.site/lastoria/wp-content/uploads/sites/251/2024/06/6-10-768x489.jpg"
                alt="People in a Hall"
                className="w-full h-auto object-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://placehold.co/600x400/333/FFF?text=Image+Not+Found";
                }}
              />
            </div>
          </div>

          {/* Text List Section */}
          <div className="w-full md:w-1/3">
            <ul className="features list-none space-y-4">
              <li className="flex items-start">
                <FaCheckCircle className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" />
                <p className="text-[#CCCCCC]">
                  Discover rare artifacts and historical pieces.
                </p>
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" />
                <p className="text-[#CCCCCC]">
                  Experience the beauty of diverse artistic styles.
                </p>
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" />
                <p className="text-[#CCCCCC]">
                  Immerse yourself in centuries of cultural richness.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collection;
