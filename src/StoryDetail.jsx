
// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import { WordExploreCards } from './WordExploreCards';

// export const StoryDetail = () => {
//   const { id } = useParams();
//   const [story, setStory] = useState(null);

//   const fetchStoryDetail = async () => {
//     const apiUrl = `https://mxpertztestapi.onrender.com/api/sciencefiction/${id}`;
//     try {
//       const response = await fetch(apiUrl);
//       if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }
//       const data = await response.json();
//       setStory(data);
//     } catch (error) {
//       console.error('Error fetching story detail:', error);
//     }
//   };

//   useEffect(() => {
//     fetchStoryDetail();
//   }, [id]);

//   if (!story) {
//     return <div className="text-white text-center p-6">Loading...</div>;
//   }

//   return (
//     <div className="p-6 h-full bg-gray-900 text-white">
//       <h1 className="text-3xl font-bold mb-6">{story.Title}</h1>

//       {/* Word Explorer Section */}
//       {story.Wordexplore && (
//         <WordExploreCards wordExploreData={story.Wordexplore} />
//       )}
//     </div>
//   );
// };
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { WordExploreCards } from './WordExploreCards';

export const StoryDetail = () => {
  const { id } = useParams(); // Retrieve the story ID from URL parameters
  const [story, setStory] = useState(null); // State to store fetched story data
  const [loading, setLoading] = useState(true); // State to track loading

  const fetchStoryDetail = async () => {
    const apiUrl = `https://mxpertztestapi.onrender.com/api/sciencefiction/${id}`;
    try {
      setLoading(true); // Set loading to true before starting the fetch
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      setStory(data); // Set the fetched story data
    } catch (error) {
      console.error('Error fetching story detail:', error);
      setStory(null); // Handle the error by setting the story to null
    } finally {
      setLoading(false); // Set loading to false once the fetch completes
    }
  };

  // Fetch story data when the component mounts or the id changes
  useEffect(() => {
    fetchStoryDetail();
  }, [id]);

  // Loading state
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-900 text-white">
        <div className="w-12 h-12 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
        <p className="ml-4">Loading...</p>
      </div>
    );
  }

  // If story is not found or there is an error
  if (!story) {
    return (
      <div className="text-white text-center p-6">
        <h2>Sorry, this story is unavailable or the ID is incorrect.</h2>
      </div>
    );
  }

  // Render story details
  return (
    <div className="p-6 h-full bg-gray-900 text-white">
      <h1 className="text-3xl font-bold mb-6">{story.Title}</h1>

      {/* Word Explorer Section */}
      {story.Wordexplore && (
        <WordExploreCards wordExploreData={story.Wordexplore} />
      )}
    </div>
  );
};
