// HomePage.js
import React, { useState } from 'react';
import NavigationBar from "../components/NavigationBar";
import Sidebar from "../components/Sidebar";
import ContentFeed from "../components/ContentFeed";
import '../css/HomePage.css'; // Import the CSS file
import CategoryContext from '../contexts/CategoryContext';

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <CategoryContext.Provider value={{ selectedCategory, setSelectedCategory }}>
      <div className="home-page">
        <NavigationBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <Sidebar />
        <ContentFeed searchTerm={searchTerm} selectedCategory={selectedCategory}/>
      </div>
    </CategoryContext.Provider>
  );
};

export default HomePage;