import { useState } from "react";
import { FaPaperPlane, FaImage, FaRegSmile } from "react-icons/fa"; // Icons for buttons

const CommentModal = ({ artifactId, closeModal }) => {
  const [comment, setComment] = useState("");

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    // Submit the comment (API call or local state update)
    console.log("Comment submitted:", comment);
    // Reset comment input after submission
    setComment("");
    closeModal(); // Close the modal after submission
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75 z-50">
      <div className="bg-[#4A4746] w-full max-w-lg p-6 rounded-lg shadow-lg">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-semibold text-[#E0D9D1]">Comments</h2>
          <button onClick={closeModal} className="text-[#D1B38A] hover:text-[#E0D9D1]">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="my-4 border-t border-[#5D5453]"></div>

        {/* Display previous comments */}
        <div className="space-y-4">
          <div className="bg-[#5D5453] p-3 rounded-lg shadow-sm">
            <p className="text-sm text-[#E0D9D1]">
              <strong>User1:</strong> This artifact is amazing! I love the history behind it.
            </p>
          </div>
          <div className="bg-[#5D5453] p-3 rounded-lg shadow-sm">
            <p className="text-sm text-[#E0D9D1]">
              <strong>User2:</strong> Great find! Would love to know more about its origins.
            </p>
          </div>
        </div>

        {/* Comment Input Section */}
        <form onSubmit={handleCommentSubmit}>
          <div className="flex items-center space-x-3 mt-4">
            <button type="button" className="p-2 text-[#D1B38A] rounded-lg hover:bg-[#4A4746]">
              <FaImage className="w-5 h-5" />
              <span className="sr-only">Upload image</span>
            </button>
            <button type="button" className="p-2 text-[#D1B38A] rounded-lg hover:bg-[#4A4746]">
              <FaRegSmile className="w-5 h-5" />
              <span className="sr-only">Add emoji</span>
            </button>
            <textarea
              value={comment}
              onChange={handleCommentChange}
              rows="3"
              className="flex-1 p-3 rounded-lg border border-[#5D5453] bg-[#5D5453] text-[#E0D9D1] focus:outline-none focus:ring-2 focus:ring-[#D1B38A] resize-none"
              placeholder="Write a comment..."
            />
            <button
              type="submit"
              className="p-2 text-[#D1B38A] rounded-full cursor-pointer hover:bg-[#5D5453]"
            >
              <FaPaperPlane className="w-5 h-5" />
              <span className="sr-only">Send message</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CommentModal;
