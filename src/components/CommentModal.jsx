import { useContext, useEffect, useState } from "react";
import { FaPaperPlane, FaImage, FaRegSmile } from "react-icons/fa"; // Icons for buttons
import { AuthContext } from "../provider/AuthProvider";
import axios from "axios";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom"; // For navigation
import { toast } from "react-hot-toast"; // For toast notifications

const CommentModal = ({ artifactId, closeModal }) => {
  const { user } = useContext(AuthContext);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate(); // Hook for navigation

  useEffect(() => {
    // Fetch comments when artifactId changes
    const fetchComments = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_BASE_URL}/comments/${artifactId}`
        );
        if (response.data && response.data.comments) {
          setComments(response.data.comments);
        } else {
          setComments([]); // No comments found
        }
      } catch (error) {
        console.error("Error fetching comments:", error);
        setError("Error fetching comments.");
      } finally {
        setLoading(false);
      }
    };

    fetchComments();
  }, [artifactId]); // Fetch comments when artifactId changes

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    if (!comment.trim()) return alert("Comment cannot be empty.");

    try {
      const newComment = {
        userInfo: {
          email: user?.email || "No Email",
          displayName: user?.displayName || "Unknown User",
          photoURL: user?.photoURL || "https://via.placeholder.com/40",
          date: format(new Date(), "Pp"), // Using date-fns to format the date
        },
        comment,
      };

      const response = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/comments/${artifactId}`,
        newComment
      );

      if (response.status === 201) {
        // Append new comment to the list of comments
        setComments((prev) => [...prev, response.data.comment]);
        setComment(""); // Clear the comment input

        // Show success toast message
        toast.success("Comment added successfully!");

        navigate("/all-artifacts");
      }
    } catch (error) {
      console.error("Error submitting comment:", error);
      alert("Failed to submit comment. Please try again.");
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75 z-50">
      <div className="bg-[#4A4746] w-full max-w-lg p-6 rounded-lg shadow-lg">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-semibold text-[#E0D9D1]">Comments</h2>
          <button
            onClick={closeModal}
            className="text-[#D1B38A] hover:text-[#E0D9D1]"
          >
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

        {/* Display Comments */}
        <div className="space-y-4 max-h-96 overflow-y-auto">
          {loading ? (
            <p className="text-center text-[#D1B38A]">Loading comments...</p>
          ) : comments.length > 0 ? (
            comments.map((item, index) => (
              <div
                key={index}
                className="bg-[#5D5453] p-3 rounded-lg shadow-sm"
              >
                <div className="flex items-start space-x-3">
                  <img
                    src={
                      item?.userInfo?.photoURL ||
                      "https://via.placeholder.com/40"
                    }
                    alt="User Avatar"
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <p className="text-sm text-[#E0D9D1] font-semibold">
                      {item?.userInfo?.displayName || "Unknown User"}
                    </p>
                    <p className="text-xs text-[#D1B38A]">
                      {item?.userInfo?.date}
                    </p>
                  </div>
                </div>
                <p className="mt-2 text-sm text-[#E0D9D1]">
                  {item?.comment || "No comment content."}
                </p>
              </div>
            ))
          ) : (
            <p className="text-center text-[#D1B38A]">No comments yet.</p>
          )}
        </div>

        {/* Comment Input Section */}
        <form onSubmit={handleCommentSubmit}>
          <div className="flex items-center space-x-3 mt-4">
            <button
              type="button"
              className="p-2 text-[#D1B38A] rounded-lg hover:bg-[#4A4746]"
            >
              <FaImage className="w-5 h-5" />
              <span className="sr-only">Upload image</span>
            </button>
            <button
              type="button"
              className="p-2 text-[#D1B38A] rounded-lg hover:bg-[#4A4746]"
            >
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
