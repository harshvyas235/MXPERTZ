import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { StoriesList } from './StoriesList';
import { StoryDetail } from './StoryDetail';

function App() {
  return (
    <div className=' bg-gray-900 h-full'>
<Router>
      <Routes>
        <Route path="/" element={<StoriesList />} />
        <Route path="/story/:id" element={<StoryDetail />} />
      </Routes>
    </Router>
    </div>
    
  );
}

export default App;
