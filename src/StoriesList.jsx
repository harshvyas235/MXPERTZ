
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Don't forget to import the CSS for toastify

export const StoriesList = () => {
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true); // Track loading state
  const navigate = useNavigate();

  const fetchStories = async () => {
    const apiUrl = 'https://mxpertztestapi.onrender.com/api/sciencefiction';

    try {
      toast.info('Loading stories...', { autoClose: false }); // Display loading toast
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      setStories(data);
    } catch (error) {
      console.error('Error fetching stories:', error);
      toast.error('Failed to load stories!'); // Show error toast
    } finally {
      setLoading(false); // Set loading to false once data is fetched
      toast.dismiss(); // Dismiss the loading toast
    }
  };

  useEffect(() => {
    fetchStories();
  }, []);

  const handleStoryClick = (storyId) => {
    navigate(`/story/${storyId}`);
  };

  return (
    <div className="p-6 min-h-screen bg-gray-900 text-white">
      <h1 className="text-4xl font-bold mb-6 text-center">Science Fiction Stories</h1>
      <div className="flex justify-center gap-4 mb-6">
        <button className="bg-blue-500 px-4 py-2 rounded-lg text-white font-semibold hover:bg-blue-600">New</button>
       <button className="bg-yellow-500 px-4 py-2 rounded-lg text-white font-semibold hover:bg-yellow-600">
        In Progress
       </button>
       <button className="bg-green-500 px-4 py-2 rounded-lg text-white font-semibold hover:bg-green-600">
         Completed
        </button>
       <button className="bg-red-500 px-4 py-2 rounded-lg text-white font-semibold hover:bg-red-600">Clear All</button>
      </div>
      {loading && (
        <div className="flex justify-center items-center space-x-4">
          <div className="w-6 h-6 border-4 border-t-4 border-gray-200 rounded-full animate-spin"></div>
          <p>Loading...</p>
        </div>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {stories.map((story) => (
          <div
            key={story._id}
            className="bg-gray-800 p-4 rounded-lg shadow-lg transform transition-transform hover:scale-105"
            onClick={() => handleStoryClick(story._id)}
          >
            <img
              src={`https://ik.imagekit.io/dev24/${story.Image?.[0]}`}
              alt={story.Title}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h2 className="text-xl font-semibold mb-2">{story.Title}</h2>
            <p className="text-gray-400">{story.Description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
