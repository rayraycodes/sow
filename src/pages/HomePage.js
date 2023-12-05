import React, { useState } from "react";
import NavigationBar from "../components/NavigationBar";
import Sidebar from "../components/Sidebar";
import ContentFeed from "../components/ContentFeed";
import '../css/HomePage.css'; // Import the CSS file

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="home-page">
      <NavigationBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Sidebar />
      <ContentFeed searchTerm={searchTerm} />
    </div>
  );
};

export default HomePage;