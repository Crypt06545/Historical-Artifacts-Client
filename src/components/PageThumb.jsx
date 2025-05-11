import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const PageThumb = ({ heading }) => {
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from(".info", {
      y: 100,
      opacity: 0,
      duration: 0.34,
      delay: 0.24,
    });
  }, []);

  return (
    <div className="bg-[#121212] py-6 min-h-screen">
      <div className="w-[89%] mx-auto">
        <div
          className="relative rounded-xl overflow-hidden h-64 md:h-72 lg:h-80 flex items-center px-6 md:px-12"
          style={{
            backgroundImage:
              "url('https://kitpro.site/lastoria/wp-content/uploads/sites/251/2024/06/28.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-70"></div>

          {/* Content */}
          <div className="relative z-10 text-left text-[#e6d9c4]">
            <h2 className="info text-3xl md:text-4xl font-semibold">{heading}</h2>
            <div className="mt-2 h-0.5 w-40 bg-[#e6d9c4]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageThumb;
