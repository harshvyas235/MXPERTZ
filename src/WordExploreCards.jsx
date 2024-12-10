import React from 'react';

export const WordExploreCards = ({ wordExploreData }) => {
  return (
    <div className="p-6 bg-gray-900 text-white min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center">Word Explorer</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {wordExploreData.map((word) => (
          <div
            key={word._id}
            className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105"
          >
            {/* Card Image */}
            <img
              src={`https://ik.imagekit.io/dev24/${word.Storyimage[0]}`}
              alt={word.Storytitle}
              className="w-full h-40 object-cover"
            />
            
            {/* Card Content */}
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{word.Storytitle}</h2>
              <p className="text-gray-400 mb-4">{word.Storyttext}</p>
              
              <div className="mt-4 text-sm">
                <p><strong>Synonyms:</strong> {word.Synonyms}</p>
                <p><strong>Antonyms:</strong> {word.Antonyms}</p>
                <p><strong>Noun:</strong> {word.Noun}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
