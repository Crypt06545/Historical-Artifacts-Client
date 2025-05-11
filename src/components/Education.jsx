import gsap from "gsap";
import { useGSAP } from "@gsap/react";


const EducationalPrograms = () => {

  useGSAP(()=>{
    const tl = gsap.timeline()
    tl.from('.main-section',{
      x:100,
      opacity:0,
      duration:0.34,
      scrollTrigger:{
        trigger:'.main-section',
        scroller:'body',
        markers:true
      }
    })
  },[])
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
      img: "https://images.squarespace-cdn.com/content/v1/5d6f2795dc0f5b00011512e2/1569101859311-6W3SCAMU9EPCBSBKECEM/Sculpture+Class.jpg",
      desc: "Learn traditional and modern sculpture methods.",
      date: "August 2024",
    },
    {
      title: "Ancient Civilizations",
      img: "https://cdn.britannica.com/35/150835-050-1AB80B5A/Pyramid-Giza-Egypt.jpg",
      desc: "Uncover secrets of ancient cultures and their heritage.",
      date: "September 2024",
    },
    {
      title: "Creative Writing in History",
      img: "https://www.culturesouthwest.org.uk/wp-content/uploads/2022/03/history-education.jpeg",
      desc: "Craft historical narratives through creative writing.",
      date: "October 2024",
    },
  ];

  return (
    <section className="bg-[#2E2B2B] py-12 text-[#E0D9D1]">
      <div className="w-[89%] mx-auto text-center">
        <h2 className="main-section text-3xl md:text-4xl font-bold text-[#A9927D] mb-10">
          Educational Programs & Workshops
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((item, index) => (
            <div
              key={index}
              className="bg-[#3F3C3C] rounded-lg shadow-md hover:shadow-lg transition hover:scale-105 overflow-hidden"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-[#A9927D] mb-1">
                  {item.title}
                </h3>
                <p className="text-sm italic text-[#D1B38A] mb-2">
                  {item.desc}
                </p>
                <p className="text-xs text-[#A9927D] mb-3">Dates: {item.date}</p>
                <button className="px-4 py-2 text-sm bg-[#A9927D] text-[#1F1D1D] rounded-full hover:bg-[#D1B38A] transition">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationalPrograms;
