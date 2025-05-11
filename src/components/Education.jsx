import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@heroui/react";

// Register plugin safely on client-side only
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const EducationalPrograms = () => {
  const programs = [
    {
      title: "Art History Workshop",
      img: "https://d3f1iyfxxz8i1e.cloudfront.net/courses/course_image/179ec11e6724.jpg",
      desc: "Explore the evolution of art and its impact on culture.",
      date: "April 2024",
    },
    {
      title: "Kids Museum Tour",
      img: "https://kidsareatrip.com/wp-content/uploads/2015/07/IMG_0983.jpg",
      desc: "Interactive and fun museum experience for children.",
      date: "June 2024",
    },
    {
      title: "Guided Museum Tour",
      img: "https://www.museum-brandhorst.de/imgs/VO_21_VIPTour_MuseumBrandhorst007-Kopie-1280x707.jpg?x40119",
      desc: "Join our experts on a journey through historic exhibits.",
      date: "July 2024",
    },
    {
      title: "Sculpture Techniques",
      img: "https://images.squarespace-cdn.com/content/v1/561452cbe4b0efb3f63f2137/1657735471465-TGPTRP97KGTDL6SVALWV/jessenusbaumart-165787-types-sculpting-techniques-blogbanner1.jpg?format=1500w",
      desc: "Learn traditional and modern sculpture methods.",
      date: "August 2024",
    },
    {
      title: "Ancient Civilizations",
      img: "https://humanities.uchicago.edu/sites/default/files/styles/article_image_retina/public/field/image/ANCIENT%20CIVILIZATIONS_FINAL_21%20Oct%202022_audio%20mix.00_00_58_00.Still004%20%281%29.jpg?itok=GTvch1Tx",
      desc: "Uncover secrets of ancient cultures and their heritage.",
      date: "September 2024",
    },
    {
      title: "Creative Writing in History",
      img: "https://www.writermag.com/wp-content/uploads/2017/08/historical-short-fiction-1024x605.jpg",
      desc: "Craft historical narratives through creative writing.",
      date: "October 2024",
    },
  ];

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".education-card").forEach((card, i) => {
        gsap.from(card, {
          opacity: 0,
          y: 40,
          duration: 0.5,
          delay: i * 0.1,
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
          },
        });
      });
    });

    return () => ctx.revert(); // Cleanup on unmount
  }, []);

  return (
    <section className="bg-[#2C2A29] py-12 text-[#E0D9D1]">
      <div className="w-[89%] mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#D3C6A1] mb-10">
          Educational Programs & Workshops
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((item, index) => (
            <div
              key={index}
              className="education-card bg-[#4F4A47] rounded-lg shadow-md hover:shadow-lg transition hover:scale-105 overflow-hidden dark:bg-[#3A3532]"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-[#D3C6A1] mb-1 dark:text-[#E0D9D1]">
                  {item.title}
                </h3>
                <p className="text-sm italic text-[#B0A59A] mb-2 dark:text-[#B8A18E]">
                  {item.desc}
                </p>
                <p className="text-xs text-[#D3C6A1] mb-3 dark:text-[#E0D9D1]">
                  Dates: {item.date}
                </p>
                <Button
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="bg-[#9C6F42] dark:bg-[#E67E22] hover:bg-[#7B5A36] dark:hover:bg-[#D35400] text-white px-5 py-2 rounded-lg font-semibold transition duration-300"
                >
                  See All
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationalPrograms;
