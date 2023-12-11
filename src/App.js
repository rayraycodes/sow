import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// App.js
import HomePage from './pages/HomePage';
import ProfilePage from "./pages/ProfilePage";
import StoryPlayPage from "./pages/StoryPlayPage";
import TextStoryPage from "./pages/TextStoryPage";
import AudioStoryPage from "./pages/AudioStoryPage";
import ArtStoryPage from "./pages/ArtStoryPage";
import SignInPage from "./pages/SignInPage";
import { AuthProvider } from './contexts/AuthContext';


const App = () => {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/story-play/:id" element={<StoryPlayPage />} />
          <Route path="/text-story" element={<TextStoryPage />} />
          <Route path="/audio-story" element={<AudioStoryPage />} />
          <Route path="/art-story" element={<ArtStoryPage />} />
          <Route path="/signin" element={<SignInPage />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
};

export default App;