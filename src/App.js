import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// App.js
import HomePage from './pages/HomePage';
import ProfilePage from "./pages/ProfilePage";
import StoryPlayPage from "./pages/StoryPlayPage";
import TextStoryPage from "./pages/TextStoryPage";
import AudioStoryPage from "./pages/AudioStoryPage";
import ArtStoryPage from "./pages/ArtStoryPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/story-play" element={<StoryPlayPage />} />
        <Route path="/text-story" element={<TextStoryPage />} />
        <Route path="/audio-story" element={<AudioStoryPage />} />
        <Route path="/art-story" element={<ArtStoryPage />} />
      </Routes>
    </Router>
  );
};

export default App;