import { FaQuoteLeft } from "react-icons/fa";

const feedbacks = [
  {
    name: "Dr. Sophia Ahmed",
    message:
      "The digital preservation of these artifacts is remarkable. As a historian, I appreciate the attention to detail and accuracy in the descriptions provided.",
    role: "Egyptology Professor, Cairo University",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    link: "#",
  },
  {
    name: "David Chen",
    message:
      "This platform has been invaluable for my research. The high-resolution images allow me to examine artifacts closely without needing physical access.",
    role: "Archaeology PhD Candidate",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    link: "#",
  },
  {
    name: "Prof. Emily Okafor",
    message:
      "An excellent resource for educators. My students love exploring the collection, and the metadata is perfect for classroom discussions about ancient civilizations.",
    role: "History Department Chair",
    image: "https://randomuser.me/api/portraits/women/63.jpg",
    link: "#",
  },
  {
    name: "Mohamed Hassan",
    message:
      "The search functionality works flawlessly. I can quickly find artifacts by period, material, or location - exactly what museum professionals need.",
    role: "Curator, Egyptian Museum",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    link: "#",
  },
];

const Feedback = () => {
  return (
    <div className="bg-[#302E2F] dark:bg-[#1F1D1D] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white dark:text-[#E0D9D1] mb-2">
            Trusted by Academics & Professionals
          </h2>
          <div className="w-20 h-1 bg-[#9C6F42] dark:bg-[#A9927D] mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {feedbacks.map((feedback, index) => (
            <div
              key={index}
              className="bg-white/10 dark:bg-[#5D5453] p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-start mb-4">
                <img
                  src={feedback.image}
                  alt={feedback.name}
                  className="w-14 h-14 rounded-full object-cover mr-4 border-2 border-[#9C6F42] dark:border-[#A9927D]"
                />
                <div>
                  <h3 className="text-lg font-semibold text-white dark:text-[#E0D9D1]">
                    {feedback.name}
                  </h3>
                  <p className="text-sm text-[#9C6F42] dark:text-[#A9927D]">
                    {feedback.role}
                  </p>
                </div>
              </div>

              <FaQuoteLeft className="text-[#9C6F42] dark:text-[#A9927D] text-xl mb-3" />
              <p className="text-white/90 dark:text-[#E0D9D1] italic mb-4">
                &quot;{feedback.message}&quot;
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Feedback;
